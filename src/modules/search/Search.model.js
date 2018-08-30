import SaraivaBookAdapter from "../adapters/SaraivaBookAdapter";

const SearchModel = (ComicsApiModel) => {

    const _getBooks = (term = null) => {
        model.term = term;
        const _getPromiseUrlByPageNumber = (pageNumber) => `https://api.saraiva.com.br/collection/products/29097/137879/0/1/&l=72&p=${pageNumber}`;
        const firstPromise = ComicsApiModel.getComics(_getPromiseUrlByPageNumber(1));

        const onPromisesEnd = () => {
            model.pagesLoaded.push(model.currentPageNumber);
            model.currentPageNumber++;
        };

        const onPromisesSuccess = (response) => {
            model.hasStartedLoading = true;

            if(model.pagesLoaded.indexOf(response.data.page) === -1) {
                model.lastPageNumber = response.data.page_total;
                const books = response.data.products.map(SaraivaBookAdapter).filter(book => book.isComicBook);
                model.books = model.books.concat(books);
                model.isLoading = true;

                if(response.data.page +1 <= model.lastPageNumber) {
                    ComicsApiModel.getComics(_getPromiseUrlByPageNumber(response.data.page + 1)).then(onPromisesSuccess).finally(onPromisesEnd);
                } else {
                    model.isLoading = false;
                }

            }
        };

        firstPromise.then(onPromisesSuccess);
        firstPromise.finally(onPromisesEnd);
    };

    const search = (term = null) => {
        model.shouldShowAllBooks = false;
        _getBooks(term);
    };

    const showAll = () => {
        model.shouldShowAllBooks = true;
        _getBooks();
    };

    const filterByData = (book) => {
        return model.shouldShowAllBooks ? true : [
            model.term === null ? false : book.name.toLowerCase().indexOf(model.term.toLowerCase()) !== -1,
            model.term === null ? false : book.description.toLowerCase().indexOf(model.term.toLowerCase()) !== -1,
            model.term === null ? false : book.authorsNames.some(authorName => authorName.toLowerCase().indexOf(model.term.toLowerCase()) !== -1)
        ].some(condition => condition);
    };

    const loadingSentences = [
        "Reunindo promoções ...",
        "Encontrando quadrinhos ...",
        "Separando cupons ...",
        "Barganhando descontos ...",
        "Listando boas ofertas ..."
    ];

    const stopLoading = () => {
        model.isLoadingStopped = true;
    };

    const resumeLoading = () => {
        model.isLoadingStopped = false;
    };

    const loadingMessage = () => {
        return loadingPercentage() === 100 ? "Busca finalizada" : loadingSentences[Math.floor(loadingPercentage() / 100 * loadingSentences.length)];
    };

    const loadingPercentage = () => Math.min(100, Math.round(100 / model.lastPageNumber * model.pagesLoaded.length));

    const model = {
        pagesLoaded: [],
        lastPageNumber: 1,
        isLoading: false,
        currentPageNumber: 1,
        books: [],
        term: null,
        hasStartedLoading: false,
        shouldShowAllBooks: false,
        isLoadingStopped: false,
        suggestions: [
            "Desafio Infinito",
            "Uma irmã",
            "Akira",
            "Demolidor",
            "Bendis, Michael",
            "Snoopy"
        ],
        dataList: {
            name: [
                "Lobo solitário",
                "Homem-Aranha",
                "Maus",
                "Bendis, Michael",
                "King, Tom",
                "Batman",
                "Vingadores"
            ]
        },
        resumeLoading: resumeLoading,
        stopLoading: stopLoading,
        showAll: showAll,
        filterByData: filterByData,
        loadingPercentage: loadingPercentage,
        loadingMessage: loadingMessage,
        search: search
    };

    return model;
};
SearchModel.$inject = ["ComicsApiModel"];

export default SearchModel;

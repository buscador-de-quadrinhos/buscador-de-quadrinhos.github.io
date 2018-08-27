import SaraivaBookAdapter from "../adapters/SaraivaBookAdapter";

const SearchModel = (Ajax) => {

    const search = () => {
        const _getPromiseUrlByPageNumber = (pageNumber) => `https://api.saraiva.com.br/collection/products/29235/137879/0/1/&s=_maisVendidos&l=72&p=${pageNumber}`;
        const firstPromise = Ajax.get(_getPromiseUrlByPageNumber(1));

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
                    Ajax.get(_getPromiseUrlByPageNumber(response.data.page + 1)).then(onPromisesSuccess).finally(onPromisesEnd);
                } else {
                    model.isLoading = false;
                }

            }
        };

        firstPromise.then(onPromisesSuccess);
        firstPromise.finally(onPromisesEnd);
    };

    const filterByData = (book) => {
        return model.shouldIgnoreFilters ? true : [
            model.filterData.searchValue === null ? false : book.name.toLowerCase().indexOf(model.filterData.searchValue.toLowerCase()) !== -1,
            model.filterData.searchValue === null ? false : book.description.toLowerCase().indexOf(model.filterData.searchValue.toLowerCase()) !== -1,
            model.filterData.searchValue === null ? false : book.authorsNames.some(authorName => authorName.toLowerCase().indexOf(model.filterData.searchValue.toLowerCase()) !== -1)
        ].some(condition => condition);
    };

    const loadingSentences = [
        "Reunindo promoções ...",
        "Encontrando quadrinhos ...",
        "Separando cupons ...",
        "Barganhando descontos ...",
        "Listando boas ofertas ..."
    ];

    const loadingMessage = () => {
        return loadingPercentage() === 100 ? "Busca finalizada" : loadingSentences[Math.floor(loadingPercentage() / 100 * loadingSentences.length)];
    };

    const loadingPercentage = () => Math.min(100, Math.round(100 / model.lastPageNumber * model.pagesLoaded.length));

    const model = {
        pagesLoaded: [],
        filterData: {
            searchValue: null
        },
        lastPageNumber: 1,
        isLoading: false,
        currentPageNumber: 1,
        books: [],
        shouldIgnoreFilters: false,
        hasStartedLoading: false,
        dataList: {
            name: [
                "Lobo solitário",
                "Homem-Aranha",
                "Demolidor",
                "Bendis, Michael",
                "King, Tom",
                "Batman",
                "Vingadores"
            ]
        },
        filterByData: filterByData,
        loadingPercentage: loadingPercentage,
        loadingMessage: loadingMessage,
        search: search
    };

    return model;
};

export default SearchModel;
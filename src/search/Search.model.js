import SaraivaBookAdapter from "../adapters/SaraivaBookAdapter";

const SearchModel = (Ajax) => {
    const changeSearchType = (searchType) => model.searchType = searchType;
    const search = () => {
        var promise = Ajax.get("https://api.saraiva.com.br/collection/products/29235/137879/0/1/&s=_maisVendidos&l=72&p=1");

        promise.then((response) => {
            console.log(response.data.products.map(SaraivaBookAdapter)); //eslint-disable-line no-console
        });
    };

    // let booksPerPage = 72;
    // let pagesCount = 224;
    // let currentPageLocation = window.location.href;

    const model = {
        filter: "",
        isLoading: false,
        loadingHasStarted: false,
        loadingHasFinished: false,
        currentPageNumber: 1,
        books: [],
        searchType: "byHQCategory",
        changeSearchType: changeSearchType,
        search: search
    };

    return model;
};

export default SearchModel;
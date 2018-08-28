const SearchByDataController = function SearchByDataController(SearchModel, $state) {
    const vc = this;
    vc.vm = SearchModel;

    vc.goToResults = () => {
        $state.go("results", { term: vc.vm.term });
    };
};
SearchByDataController.$inject = ["SearchModel", "$state"];

export default SearchByDataController;
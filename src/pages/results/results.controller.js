const ResultsController = function ResultsController ($stateParams, SearchModel) {
    const vc = this; // eslint-disable-line no-unused-vars
    SearchModel.search($stateParams.term);
};
ResultsController.$inject = ["$stateParams", "SearchModel"];

export default ResultsController;
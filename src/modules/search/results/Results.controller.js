const ResultsDirectiveController = function ResultsDirectiveController(SearchModel){
    const vc = this;
    vc.vm = SearchModel;
};
ResultsDirectiveController.$inject = ["SearchModel"];
export default ResultsDirectiveController;
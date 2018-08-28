import ResultsDirectiveTemplate from "./Results.template.html";

const ResultsDirective = () => {

    return {
        scope: {},
        restrict: "E",
        controllerAs: "vc",
        replace: true,
        bindToController: true,
        controller: "ResultsDirectiveController",
        template: ResultsDirectiveTemplate
    };
};

export default ResultsDirective;
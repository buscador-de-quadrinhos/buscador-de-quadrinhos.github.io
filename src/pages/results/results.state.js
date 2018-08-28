import ResultsController from "./results.controller";
import ResultsTemplate from "./results.template.html";

const State = {
    name: "results",
    url: "/busca/:term",
    controller: ResultsController,
    controllerAs: "vc",
    template: ResultsTemplate
};

export default State;
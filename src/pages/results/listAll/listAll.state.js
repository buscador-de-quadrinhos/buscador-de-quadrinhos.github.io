import ListAllController from "./listAll.controller";
import ListAllTemplate from "./listAll.template.html";

const State = {
    name: "listAll",
    url: "/todos",
    controller: ListAllController,
    controllerAs: "vc",
    template: ListAllTemplate
};

export default State;


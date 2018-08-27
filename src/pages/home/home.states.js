import HomeController from "./home.controller";
import HomeTemplate from "./home.template.html";

const States = {
    home: {
        name: "home",
        url: "/",
        controller: HomeController,
        controllerAs: "vc",
        template: HomeTemplate
    }
};

export default States;
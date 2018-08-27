const BuscadorModuleName = "buscador";
import angular from "angular";
import AjaxModuleName from "./modules/ajax/ajax.module";
import BookBoxModuleName from "./modules/book-box/book-box.module";
import HomeModuleName from "./pages/home/home.module";
import "./index.scss";

angular.module(BuscadorModuleName, [AjaxModuleName, BookBoxModuleName, HomeModuleName]);

const IndexController = () => {
    const vc = this; // eslint-disable-line no-unused-vars
};

IndexController.$inject = [];

const config = ($urlRouterProvider) => {
    $urlRouterProvider.otherwise("/");
};

angular.module(BuscadorModuleName).controller("IndexController", IndexController);
angular.module(BuscadorModuleName).config(config);
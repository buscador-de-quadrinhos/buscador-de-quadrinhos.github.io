const BuscadorModuleName = "buscador";
import angular from "angular";
import AjaxModuleName from "./modules/ajax/ajax.module";
import BookBoxModuleName from "./modules/book-box/book-box.module";
import SearchModuleName from "./modules/search/search.module";
import States from "./states";
import "angular-ui-router";
import "./index.scss";

angular.module(BuscadorModuleName, [AjaxModuleName, BookBoxModuleName, SearchModuleName, "ui.router"]);

const IndexController = () => {
    var vc = this; // eslint-disable-line no-unused-vars
};

IndexController.$inject = [];

const config = ($stateProvider, $urlRouterProvider) => {
    $stateProvider.state(States.home);
    $urlRouterProvider.otherwise("/");
};

angular.module(BuscadorModuleName).controller("IndexController", IndexController);
angular.module(BuscadorModuleName).config(config);
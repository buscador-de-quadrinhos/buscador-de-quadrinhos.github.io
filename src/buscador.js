const BuscadorModuleName = "buscador";
import angular from "angular";
import HomeModuleName from "./pages/home/home.module";
import ResultsModuleName from "./pages/results/results.module";
import "./index.scss";

angular.module(BuscadorModuleName, [HomeModuleName, ResultsModuleName]);

const IndexController = () => {
    const vc = this; // eslint-disable-line no-unused-vars
};

IndexController.$inject = [];

const config = ($urlRouterProvider) => {
    $urlRouterProvider.otherwise("/");
};

angular.module(BuscadorModuleName).controller("IndexController", IndexController);
angular.module(BuscadorModuleName).config(config);
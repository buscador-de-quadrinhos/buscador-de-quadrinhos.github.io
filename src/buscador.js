import angular from "angular";
import IndexController from "./Index.controller";
import Config from "./Config";
import HomeModuleName from "./pages/home/home.module";
import ResultsModuleName from "./pages/results/results.module";
import "./index.scss";

angular.module("buscador", [HomeModuleName, ResultsModuleName]);
angular.module("buscador").controller("IndexController", IndexController);
angular.module("buscador").config(Config);
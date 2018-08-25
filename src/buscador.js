const BuscadorModuleName = "buscador";
import angular from "angular";
import AjaxModuleName from "./ajax/ajax.module";
import BookBoxModuleName from "./book-box/book-box.module";
import SearchModuleName from "./search/search.module";

import "./index.scss";

angular.module(BuscadorModuleName, [AjaxModuleName, BookBoxModuleName, SearchModuleName]);

const IndexController = (Ajax, SearchModel) => {
    var vc = this; // eslint-disable-line no-unused-vars
    SearchModel.search();
};

IndexController.$inject = ["Ajax", "SearchModel"];

angular.module(BuscadorModuleName).controller("IndexController", IndexController);

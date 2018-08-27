const SearchModuleName = "buscador.search";

import angular from "angular";
import AjaxModuleName from "../ajax/ajax.module";
import SearchModel from "./Search.model";
import SearchByData from "./by-data/SearchByData.directive";
import SearchByDataController from "./by-data/SearchByData.controller";
import ResultsDirective from "./results/Results.directive";
import ResultsDirectiveController from "./results/Results.controller";

angular.module(SearchModuleName, [AjaxModuleName]);
angular.module(SearchModuleName).factory("SearchModel", SearchModel);
angular.module(SearchModuleName).controller("SearchByDataController", SearchByDataController);
angular.module(SearchModuleName).directive("searchByData", SearchByData);

angular.module(SearchModuleName).controller("ResultsDirectiveController", ResultsDirectiveController);
angular.module(SearchModuleName).directive("results", ResultsDirective);

export default SearchModuleName;
const ResultsModuleName = "buscador.pages.results";

import angular from "angular";
import SearchModuleName from "../../modules/search/search.module";
import ResultsConfig from "./results.config";
import "angular-ui-router";

angular.module(ResultsModuleName, [SearchModuleName, "ui.router"]);
angular.module(ResultsModuleName).config(ResultsConfig);

export default ResultsModuleName;
const SearchModuleName = "buscador.search";

import angular from "angular";
import AjaxModuleName from "../ajax/ajax.module";
import SearchModel from "./Search.model";

angular.module(SearchModuleName, [AjaxModuleName]);
angular.module(SearchModuleName).factory("SearchModel", SearchModel);

export default SearchModuleName;
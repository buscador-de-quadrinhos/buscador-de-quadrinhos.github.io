import angular from "angular";

import AjaxModuleName from "../ajax/ajax.module";
import ComicsApiModel from "./ComicsApi.model";

const ComicsApiModuleName = "buscador.comics";

angular.module(ComicsApiModuleName, [AjaxModuleName]);
angular.module(ComicsApiModuleName).factory("ComicsApiModel", ComicsApiModel);

export default ComicsApiModuleName;
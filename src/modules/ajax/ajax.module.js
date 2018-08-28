import angular from "angular";
import AjaxModel from "./Ajax.model";

const AjaxModuleName = "buscador.ajax";

angular.module(AjaxModuleName, []);
angular.module(AjaxModuleName).factory("AjaxModel", AjaxModel);

export default AjaxModuleName;
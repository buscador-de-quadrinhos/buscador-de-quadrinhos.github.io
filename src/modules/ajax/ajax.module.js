import angular from "angular";
import Ajax from "./Ajax.model";

const AjaxModuleName = "buscador.ajax";

angular.module(AjaxModuleName, []);
angular.module(AjaxModuleName).factory("Ajax", Ajax);

export default AjaxModuleName;
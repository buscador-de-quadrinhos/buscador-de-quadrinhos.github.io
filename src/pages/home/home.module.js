import angular from "angular";
const HomeModuleName = "buscador.pages.home";
import Config from "./home.config";
import SearchModuleName from "../../modules/search/search.module";
import "angular-ui-router";

angular.module(HomeModuleName, [SearchModuleName, "ui.router"]);
angular.module(HomeModuleName).config(Config);

export default HomeModuleName;
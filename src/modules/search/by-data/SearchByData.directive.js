import SearchByDataTemplate from "./SearchByData.template.html";

const SearchByDataDirective = () => {
    return {
        template: SearchByDataTemplate,
        scope: {},
        restrict: "E",
        controllerAs: "vc",
        controller: "SearchByDataController",
        bindToController: true
    };
};

export default SearchByDataDirective;
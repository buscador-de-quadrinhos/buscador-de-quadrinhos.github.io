import SearchByDataTemplate from "./SearchByData.template.html";

const SearchByDataDirective = () => {
    return {
        template: SearchByDataTemplate,
        scope: {},
        restrict: "E",
        controllerAs: "vc",
        replace: true,
        controller: "SearchByDataController",
        bindToController: true
    };
};

export default SearchByDataDirective;
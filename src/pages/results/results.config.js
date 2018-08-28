import ResultsState from "./results.state";
import ListAllState from "./listAll/listAll.state";

const config = ($stateProvider) => {
    $stateProvider.state(ResultsState);
    $stateProvider.state(ListAllState);
};

config.$inject = ["$stateProvider"];
export default config;

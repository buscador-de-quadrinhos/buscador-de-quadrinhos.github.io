import States from "./results.states";

const config = ($stateProvider) => {
    $stateProvider.state(States.results);
};

config.$inject = ["$stateProvider"];
export default config;

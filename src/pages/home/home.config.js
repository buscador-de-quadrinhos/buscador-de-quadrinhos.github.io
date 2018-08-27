import States from "./home.states";

const config = ($stateProvider) => {
    $stateProvider.state(States.home);
};

config.$inject = ["$stateProvider"];
export default config;
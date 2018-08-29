const Config = ($urlRouterProvider) => {
    $urlRouterProvider.otherwise("/");
};
Config.$inject = ["$urlRouterProvider"];
export default Config;
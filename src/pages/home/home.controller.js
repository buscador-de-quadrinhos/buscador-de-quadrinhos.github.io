const HomeController = function (SearchModel) {
    const vc = this; // eslint-disable-line no-unused-vars
    SearchModel.stopLoading();
};

HomeController.$inject = ["SearchModel"];

export default HomeController;
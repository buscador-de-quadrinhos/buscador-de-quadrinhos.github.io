const ListAllController = function ListAllController (SearchModel) {
    const vc = this; // eslint-disable-line no-unused-vars
    SearchModel.showAll();
};
ListAllController.$inject = ["SearchModel"];

export default ListAllController;
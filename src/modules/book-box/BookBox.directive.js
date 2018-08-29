import BookBoxTemplate from "./BookBox.template";

const BookBoxDirective = function BookBoxDirective (){
    return {
        bindToController: true,
        controllerAs: "vc",
        controller: function (){
            const vc = this; // eslint-disable-line no-unused-vars
        },
        template: BookBoxTemplate,
        restrict: "E",
        replace: true,
        scope: {
            book: "=book"
        }
    };
};
BookBoxDirective.$inject = [];
export default BookBoxDirective;
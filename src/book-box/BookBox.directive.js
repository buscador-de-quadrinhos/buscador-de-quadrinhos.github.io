import BookBoxTemplate from "./BookBox.template";

const BookBoxDirective = function BookBoxDirective (){
    return {
        bindToController: true,
        controllerAs: "vc",
        controller: () => {},
        template: BookBoxTemplate,
        restrict: "E",
        scope: {
            book: "=book"
        }
    };
};

export default BookBoxDirective;
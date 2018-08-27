import angular from "angular";
import BookBoxDirective from "./BookBox.directive";

let BookBoxModuleName = "buscador.book-box";

angular.module(BookBoxModuleName, []);
angular.module(BookBoxModuleName).directive("bookBox", BookBoxDirective);

export default BookBoxModuleName;
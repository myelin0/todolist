/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './style.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// import _ from 'lodash';


// function component() {
//   const element = document.createElement("div");

//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = _.join(" ");
//   element.classList.add('hello');

//   return element;
// }

// document.body.appendChild(component());

const toDoTasks = [
  {
    description: 'Make breakfast',
    completed: false,
    index: 0,
  },
  {
    description: 'Drink Juice',
    completed: true,
    index: 1,
  },
  {
    description: 'Go out',
    completed: false,
    index: 2,
  },
];

const List = document.querySelector('.List');

const createList = () => {
  toDoTasks.forEach((task) => {
    const element = document.createElement('li');
    element.innerHTML = `<div class="left"><i class="far fa-square"></i> ${task.description} </div><i class="fa fa-ellipsis-v"></i>`;
    element.classList.add('rows');
    List.append(element);
  });
};

window.onload = createList();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7OztBQ05BO0FBQ3FCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxrQkFBa0I7QUFDN0Y7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbi8vIGZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcclxuLy8gICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbi8vICAgLy8gTG9kYXNoLCBjdXJyZW50bHkgaW5jbHVkZWQgdmlhIGEgc2NyaXB0LCBpcyByZXF1aXJlZCBmb3IgdGhpcyBsaW5lIHRvIHdvcmtcclxuLy8gICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihcIiBcIik7XHJcbi8vICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoZWxsbycpO1xyXG5cclxuLy8gICByZXR1cm4gZWxlbWVudDtcclxuLy8gfVxyXG5cclxuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XHJcblxyXG5jb25zdCB0b0RvVGFza3MgPSBbXHJcbiAge1xyXG4gICAgZGVzY3JpcHRpb246ICdNYWtlIGJyZWFrZmFzdCcsXHJcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgaW5kZXg6IDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBkZXNjcmlwdGlvbjogJ0RyaW5rIEp1aWNlJyxcclxuICAgIGNvbXBsZXRlZDogdHJ1ZSxcclxuICAgIGluZGV4OiAxLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGVzY3JpcHRpb246ICdHbyBvdXQnLFxyXG4gICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgIGluZGV4OiAyLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkxpc3QnKTtcclxuXHJcbmNvbnN0IGNyZWF0ZUxpc3QgPSAoKSA9PiB7XHJcbiAgdG9Eb1Rhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImxlZnRcIj48aSBjbGFzcz1cImZhciBmYS1zcXVhcmVcIj48L2k+ICR7dGFzay5kZXNjcmlwdGlvbn0gPC9kaXY+PGkgY2xhc3M9XCJmYSBmYS1lbGxpcHNpcy12XCI+PC9pPmA7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Jvd3MnKTtcclxuICAgIExpc3QuYXBwZW5kKGVsZW1lbnQpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGNyZWF0ZUxpc3QoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
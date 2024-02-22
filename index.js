// // tabs

// // CONCATENATED MODULE: ./src/components/tabs.js
// function tabs_toConsumableArray(arr) {
//   return (
//     tabs_arrayWithoutHoles(arr) ||
//     tabs_iterableToArray(arr) ||
//     tabs_unsupportedIterableToArray(arr) ||
//     tabs_nonIterableSpread()
//   );
// }

// function tabs_nonIterableSpread() {
//   throw new TypeError(
//     "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
//   );
// }

// function tabs_unsupportedIterableToArray(o, minLen) {
//   if (!o) return;
//   if (typeof o === "string") return tabs_arrayLikeToArray(o, minLen);
//   var n = Object.prototype.toString.call(o).slice(8, -1);
//   if (n === "Object" && o.constructor) n = o.constructor.name;
//   if (n === "Map" || n === "Set") return Array.from(o);
//   if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
//     return tabs_arrayLikeToArray(o, minLen);
// }

// function tabs_iterableToArray(iter) {
//   if (
//     (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null) ||
//     iter["@@iterator"] != null
//   )
//     return Array.from(iter);
// }

// function tabs_arrayWithoutHoles(arr) {
//   if (Array.isArray(arr)) return tabs_arrayLikeToArray(arr);
// }

// function tabs_arrayLikeToArray(arr, len) {
//   if (len == null || len > arr.length) len = arr.length;
//   for (var i = 0, arr2 = new Array(len); i < len; i++) {
//     arr2[i] = arr[i];
//   }
//   return arr2;
// }

// function tabs_ownKeys(object, enumerableOnly) {
//   var keys = Object.keys(object);
//   if (Object.getOwnPropertySymbols) {
//     var symbols = Object.getOwnPropertySymbols(object);
//     enumerableOnly &&
//       (symbols = symbols.filter(function (sym) {
//         return Object.getOwnPropertyDescriptor(object, sym).enumerable;
//       })),
//       keys.push.apply(keys, symbols);
//   }
//   return keys;
// }

// function tabs_objectSpread(target) {
//   for (var i = 1; i < arguments.length; i++) {
//     var source = null != arguments[i] ? arguments[i] : {};
//     i % 2
//       ? tabs_ownKeys(Object(source), !0).forEach(function (key) {
//           tabs_defineProperty(target, key, source[key]);
//         })
//       : Object.getOwnPropertyDescriptors
//       ? Object.defineProperties(
//           target,
//           Object.getOwnPropertyDescriptors(source)
//         )
//       : tabs_ownKeys(Object(source)).forEach(function (key) {
//           Object.defineProperty(
//             target,
//             key,
//             Object.getOwnPropertyDescriptor(source, key)
//           );
//         });
//   }
//   return target;
// }

// function tabs_defineProperty(obj, key, value) {
//   if (key in obj) {
//     Object.defineProperty(obj, key, {
//       value: value,
//       enumerable: true,
//       configurable: true,
//       writable: true,
//     });
//   } else {
//     obj[key] = value;
//   }
//   return obj;
// }

// function tabs_classCallCheck(instance, Constructor) {
//   if (!(instance instanceof Constructor)) {
//     throw new TypeError("Cannot call a class as a function");
//   }
// }

// function tabs_defineProperties(target, props) {
//   for (var i = 0; i < props.length; i++) {
//     var descriptor = props[i];
//     descriptor.enumerable = descriptor.enumerable || false;
//     descriptor.configurable = true;
//     if ("value" in descriptor) descriptor.writable = true;
//     Object.defineProperty(target, descriptor.key, descriptor);
//   }
// }

// function tabs_createClass(Constructor, protoProps, staticProps) {
//   if (protoProps) tabs_defineProperties(Constructor.prototype, protoProps);
//   if (staticProps) tabs_defineProperties(Constructor, staticProps);
//   Object.defineProperty(Constructor, "prototype", { writable: false });
//   return Constructor;
// }

// var tabs_Default = {
//   defaultTabId: null,
//   activeClasses: "leading-0",
//   inactiveClasses: "leading-0",
//   onShow: function onShow() {},
// };

// var Tabs = (function () {
//   function Tabs() {
//     var items =
//       arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
//     var options =
//       arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

//     tabs_classCallCheck(this, Tabs);

//     this._items = items;
//     this._activeTab = options ? this.getTab(options.defaultTabId) : null;
//     this._options = tabs_objectSpread(
//       tabs_objectSpread({}, tabs_Default),
//       options
//     );

//     this._init();
//   }

//   tabs_createClass(Tabs, [
//     {
//       key: "_init",
//       value: function _init() {
//         var _this = this;

//         if (this._items.length) {
//           // set the first tab as active if not set by explicitly
//           if (!this._activeTab) {
//             this._setActiveTab(this._items[0]);
//           } // force show the first default tab

//           this.show(this._activeTab.id, true); // show tab content based on click

//           this._items.map(function (tab) {
//             tab.triggerEl.addEventListener("click", function () {
//               _this.show(tab.id);
//             });
//           });
//         }
//       },
//     },
//     {
//       key: "getActiveTab",
//       value: function getActiveTab() {
//         return this._activeTab;
//       },
//     },
//     {
//       key: "_setActiveTab",
//       value: function _setActiveTab(tab) {
//         this._activeTab = tab;
//       },
//     },
//     {
//       key: "getTab",
//       value: function getTab(id) {
//         return this._items.filter(function (t) {
//           return t.id === id;
//         })[0];
//       },
//     },
//     {
//       key: "show",
//       value: function show(id) {
//         var _this2 = this,
//           _tab$triggerEl$classL,
//           _tab$triggerEl$classL2;

//         var forceShow =
//           arguments.length > 1 && arguments[1] !== undefined
//             ? arguments[1]
//             : false;
//         var tab = this.getTab(id); // don't do anything if already active

//         if (tab === this._activeTab && !forceShow) {
//           return;
//         } // hide other tabs

//         this._items.map(function (t) {
//           if (t !== tab) {
//             var _t$triggerEl$classLis, _t$triggerEl$classLis2;

//             (_t$triggerEl$classLis = t.triggerEl.classList).remove.apply(
//               _t$triggerEl$classLis,
//               tabs_toConsumableArray(_this2._options.activeClasses.split(" "))
//             );

//             (_t$triggerEl$classLis2 = t.triggerEl.classList).add.apply(
//               _t$triggerEl$classLis2,
//               tabs_toConsumableArray(_this2._options.inactiveClasses.split(" "))
//             );

//             t.targetEl.classList.add("hidden");
//             t.triggerEl.setAttribute("aria-selected", false);
//           }
//         }); // show active tab

//         (_tab$triggerEl$classL = tab.triggerEl.classList).add.apply(
//           _tab$triggerEl$classL,
//           tabs_toConsumableArray(this._options.activeClasses.split(" "))
//         );

//         (_tab$triggerEl$classL2 = tab.triggerEl.classList).remove.apply(
//           _tab$triggerEl$classL2,
//           tabs_toConsumableArray(this._options.inactiveClasses.split(" "))
//         );

//         tab.triggerEl.setAttribute("aria-selected", true);
//         tab.targetEl.classList.remove("hidden");

//         this._setActiveTab(tab); // callback function

//         this._options.onShow(this, tab);
//       },
//     },
//   ]);

//   return Tabs;
// })();

// window.Tabs = Tabs;
// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelectorAll("[data-tabs-toggle]").forEach(function (triggerEl) {
//     var tabElements = [];
//     var defaultTabId = null;
//     triggerEl.querySelectorAll('[role="tab"]').forEach(function (el) {
//       var isActive = el.getAttribute("aria-selected") === "true";
//       var tab = {
//         id: el.getAttribute("data-tabs-target"),
//         triggerEl: el,
//         targetEl: document.querySelector(el.getAttribute("data-tabs-target")),
//       };
//       tabElements.push(tab);

//       if (isActive) {
//         defaultTabId = tab.id;
//       }
//     });
//     new Tabs(tabElements, {
//       defaultTabId: defaultTabId,
//     });
//   });
// });
// /* harmony default export */ const tabs = Tabs;

// // tabs

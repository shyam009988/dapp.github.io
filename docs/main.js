/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const products = [\r\n  {\r\n    name: \"Giant BBQ\",\r\n    image: \"https://i.imgur.com/yPreV19.png\",\r\n    description: `Grilled chicken, beef, fish, sausages, bacon, \r\n      vegetables served with chips.`,\r\n    location: \"Kimironko Market\",\r\n    owner: \"0x32Be343B94f860124dC4fEe278FDCBD38C102D88\",\r\n    price: 3,\r\n    sold: 27,\r\n    index: 0,\r\n  },\r\n  {\r\n    name: \"BBQ Chicken\",\r\n    image: \"https://i.imgur.com/NMEzoYb.png\",\r\n    description: `French fries and grilled chicken served with gacumbari \r\n      and avocados with cheese.`,\r\n    location: \"Afrika Fresh KG 541 St\",\r\n    owner: \"0x3275B7F400cCdeBeDaf0D8A9a7C8C1aBE2d747Ea\",\r\n    price: 4,\r\n    sold: 12,\r\n    index: 1,\r\n  },\r\n  {\r\n    name: \"Beef burrito\",\r\n    image: \"https://i.imgur.com/RNlv3S6.png\",\r\n    description: `Homemade tortilla with your choice of filling, cheese, \r\n      guacamole salsa with Mexican refried beans and rice.`,\r\n    location: \"Asili - KN 4 St\",\r\n    owner: \"0x2EF48F32eB0AEB90778A2170a0558A941b72BFFb\",\r\n    price: 2,\r\n    sold: 35,\r\n    index: 2,\r\n  },\r\n  {\r\n    name: \"Barbecue Pizza\",\r\n    image: \"https://i.imgur.com/fpiDeFd.png\",\r\n    description: `Barbecue Chicken Pizza: Chicken, gouda, pineapple, onions \r\n      and house-made BBQ sauce.`,\r\n    location: \"Kigali Hut KG 7 Ave\",\r\n    owner: \"0x2EF48F32eB0AEB90778A2170a0558A941b72BFFb\",\r\n    price: 1,\r\n    sold: 2,\r\n    index: 3,\r\n  },\r\n]\r\n\r\nconst getBalance = function () {\r\n  document.querySelector(\"#balance\").textContent = 21\r\n}\r\n\r\nfunction renderProducts() {\r\n  document.getElementById(\"marketplace\").innerHTML = \"\"\r\n  products.forEach((_product) => {\r\n    const newDiv = document.createElement(\"div\")\r\n    newDiv.className = \"col-md-4\"\r\n    newDiv.innerHTML = productTemplate(_product)\r\n    document.getElementById(\"marketplace\").appendChild(newDiv)\r\n  })\r\n}\r\n\r\nfunction productTemplate(_product) {\r\n  return `\r\n    <div class=\"card mb-4\">\r\n      <img class=\"card-img-top\" src=\"${_product.image}\" alt=\"...\">\r\n      <div class=\"position-absolute top-0 end-0 bg-warning mt-4 px-2 py-1 rounded-start\">\r\n        ${_product.sold} Sold\r\n      </div>\r\n      <div class=\"card-body text-left p-4 position-relative\">\r\n        <div class=\"translate-middle-y position-absolute top-0\">\r\n        ${identiconTemplate(_product.owner)}\r\n        </div>\r\n        <h2 class=\"card-title fs-4 fw-bold mt-2\">${_product.name}</h2>\r\n        <p class=\"card-text mb-4\" style=\"min-height: 82px\">\r\n          ${_product.description}             \r\n        </p>\r\n        <p class=\"card-text mt-4\">\r\n          <i class=\"bi bi-geo-alt-fill\"></i>\r\n          <span>${_product.location}</span>\r\n        </p>\r\n        <div class=\"d-grid gap-2\">\r\n          <a class=\"btn btn-lg btn-outline-dark buyBtn fs-6 p-3\" id=${\r\n            _product.index\r\n          }>\r\n            Buy for ${_product.price} cUSD\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  `\r\n}\r\n\r\nfunction identiconTemplate(_address) {\r\n  const icon = blockies\r\n    .create({\r\n      seed: _address,\r\n      size: 8,\r\n      scale: 16,\r\n    })\r\n    .toDataURL()\r\n\r\n  return `\r\n  <div class=\"rounded-circle overflow-hidden d-inline-block border border-white border-2 shadow-sm m-0\">\r\n    <a href=\"https://alfajores-blockscout.celo-testnet.org/address/${_address}/transactions\"\r\n        target=\"_blank\">\r\n        <img src=\"${icon}\" width=\"48\" alt=\"${_address}\">\r\n    </a>\r\n  </div>\r\n  `\r\n}\r\n\r\nfunction notification(_text) {\r\n  document.querySelector(\".alert\").style.display = \"block\"\r\n  document.querySelector(\"#notification\").textContent = _text\r\n}\r\n\r\nfunction notificationOff() {\r\n  document.querySelector(\".alert\").style.display = \"none\"\r\n}\r\n\r\nwindow.addEventListener(\"load\", () => {\r\n  notification(\"??? Loading...\")\r\n  getBalance()\r\n  renderProducts()\r\n  notificationOff()\r\n})\r\n\r\ndocument\r\n  .querySelector(\"#newProductBtn\")\r\n  .addEventListener(\"click\", () => {\r\n    const _product = {\r\n      owner: \"0x2EF48F32eB0AEB90778A2170a0558A941b72BFFb\",\r\n      name: document.getElementById(\"newProductName\").value,\r\n      image: document.getElementById(\"newImgUrl\").value,\r\n      description: document.getElementById(\"newProductDescription\").value,\r\n      location: document.getElementById(\"newLocation\").value,\r\n      price: document.getElementById(\"newPrice\").value,\r\n      sold: 0,\r\n      index: products.length,\r\n    }\r\n    products.push(_product)\r\n    notification(`???? You successfully added \"${_product.name}\".`)\r\n    renderProducts()\r\n  })\r\n\r\ndocument.querySelector(\"#marketplace\").addEventListener(\"click\", (e) => {\r\n  if(e.target.className.includes(\"buyBtn\")) {\r\n    const index = e.target.id\r\n    products[index].sold++\r\n    notification(`???? You successfully bought \"${products[index].name}\".`)\r\n    renderProducts()\r\n  }\r\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJvZHVjdHMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJHaWFudCBCQlFcIixcclxuICAgIGltYWdlOiBcImh0dHBzOi8vaS5pbWd1ci5jb20veVByZVYxOS5wbmdcIixcclxuICAgIGRlc2NyaXB0aW9uOiBgR3JpbGxlZCBjaGlja2VuLCBiZWVmLCBmaXNoLCBzYXVzYWdlcywgYmFjb24sIFxyXG4gICAgICB2ZWdldGFibGVzIHNlcnZlZCB3aXRoIGNoaXBzLmAsXHJcbiAgICBsb2NhdGlvbjogXCJLaW1pcm9ua28gTWFya2V0XCIsXHJcbiAgICBvd25lcjogXCIweDMyQmUzNDNCOTRmODYwMTI0ZEM0ZkVlMjc4RkRDQkQzOEMxMDJEODhcIixcclxuICAgIHByaWNlOiAzLFxyXG4gICAgc29sZDogMjcsXHJcbiAgICBpbmRleDogMCxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQkJRIENoaWNrZW5cIixcclxuICAgIGltYWdlOiBcImh0dHBzOi8vaS5pbWd1ci5jb20vTk1Fem9ZYi5wbmdcIixcclxuICAgIGRlc2NyaXB0aW9uOiBgRnJlbmNoIGZyaWVzIGFuZCBncmlsbGVkIGNoaWNrZW4gc2VydmVkIHdpdGggZ2FjdW1iYXJpIFxyXG4gICAgICBhbmQgYXZvY2Fkb3Mgd2l0aCBjaGVlc2UuYCxcclxuICAgIGxvY2F0aW9uOiBcIkFmcmlrYSBGcmVzaCBLRyA1NDEgU3RcIixcclxuICAgIG93bmVyOiBcIjB4MzI3NUI3RjQwMGNDZGVCZURhZjBEOEE5YTdDOEMxYUJFMmQ3NDdFYVwiLFxyXG4gICAgcHJpY2U6IDQsXHJcbiAgICBzb2xkOiAxMixcclxuICAgIGluZGV4OiAxLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJCZWVmIGJ1cnJpdG9cIixcclxuICAgIGltYWdlOiBcImh0dHBzOi8vaS5pbWd1ci5jb20vUk5sdjNTNi5wbmdcIixcclxuICAgIGRlc2NyaXB0aW9uOiBgSG9tZW1hZGUgdG9ydGlsbGEgd2l0aCB5b3VyIGNob2ljZSBvZiBmaWxsaW5nLCBjaGVlc2UsIFxyXG4gICAgICBndWFjYW1vbGUgc2Fsc2Egd2l0aCBNZXhpY2FuIHJlZnJpZWQgYmVhbnMgYW5kIHJpY2UuYCxcclxuICAgIGxvY2F0aW9uOiBcIkFzaWxpIC0gS04gNCBTdFwiLFxyXG4gICAgb3duZXI6IFwiMHgyRUY0OEYzMmVCMEFFQjkwNzc4QTIxNzBhMDU1OEE5NDFiNzJCRkZiXCIsXHJcbiAgICBwcmljZTogMixcclxuICAgIHNvbGQ6IDM1LFxyXG4gICAgaW5kZXg6IDIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkJhcmJlY3VlIFBpenphXCIsXHJcbiAgICBpbWFnZTogXCJodHRwczovL2kuaW1ndXIuY29tL2ZwaURlRmQucG5nXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogYEJhcmJlY3VlIENoaWNrZW4gUGl6emE6IENoaWNrZW4sIGdvdWRhLCBwaW5lYXBwbGUsIG9uaW9ucyBcclxuICAgICAgYW5kIGhvdXNlLW1hZGUgQkJRIHNhdWNlLmAsXHJcbiAgICBsb2NhdGlvbjogXCJLaWdhbGkgSHV0IEtHIDcgQXZlXCIsXHJcbiAgICBvd25lcjogXCIweDJFRjQ4RjMyZUIwQUVCOTA3NzhBMjE3MGEwNTU4QTk0MWI3MkJGRmJcIixcclxuICAgIHByaWNlOiAxLFxyXG4gICAgc29sZDogMixcclxuICAgIGluZGV4OiAzLFxyXG4gIH0sXHJcbl1cclxuXHJcbmNvbnN0IGdldEJhbGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYWxhbmNlXCIpLnRleHRDb250ZW50ID0gMjFcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJvZHVjdHMoKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJrZXRwbGFjZVwiKS5pbm5lckhUTUwgPSBcIlwiXHJcbiAgcHJvZHVjdHMuZm9yRWFjaCgoX3Byb2R1Y3QpID0+IHtcclxuICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIG5ld0Rpdi5jbGFzc05hbWUgPSBcImNvbC1tZC00XCJcclxuICAgIG5ld0Rpdi5pbm5lckhUTUwgPSBwcm9kdWN0VGVtcGxhdGUoX3Byb2R1Y3QpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmtldHBsYWNlXCIpLmFwcGVuZENoaWxkKG5ld0RpdilcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9kdWN0VGVtcGxhdGUoX3Byb2R1Y3QpIHtcclxuICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQgbWItNFwiPlxyXG4gICAgICA8aW1nIGNsYXNzPVwiY2FyZC1pbWctdG9wXCIgc3JjPVwiJHtfcHJvZHVjdC5pbWFnZX1cIiBhbHQ9XCIuLi5cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLWFic29sdXRlIHRvcC0wIGVuZC0wIGJnLXdhcm5pbmcgbXQtNCBweC0yIHB5LTEgcm91bmRlZC1zdGFydFwiPlxyXG4gICAgICAgICR7X3Byb2R1Y3Quc29sZH0gU29sZFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSB0ZXh0LWxlZnQgcC00IHBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRyYW5zbGF0ZS1taWRkbGUteSBwb3NpdGlvbi1hYnNvbHV0ZSB0b3AtMFwiPlxyXG4gICAgICAgICR7aWRlbnRpY29uVGVtcGxhdGUoX3Byb2R1Y3Qub3duZXIpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoMiBjbGFzcz1cImNhcmQtdGl0bGUgZnMtNCBmdy1ib2xkIG10LTJcIj4ke19wcm9kdWN0Lm5hbWV9PC9oMj5cclxuICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dCBtYi00XCIgc3R5bGU9XCJtaW4taGVpZ2h0OiA4MnB4XCI+XHJcbiAgICAgICAgICAke19wcm9kdWN0LmRlc2NyaXB0aW9ufSAgICAgICAgICAgICBcclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHQgbXQtNFwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1nZW8tYWx0LWZpbGxcIj48L2k+XHJcbiAgICAgICAgICA8c3Bhbj4ke19wcm9kdWN0LmxvY2F0aW9ufTwvc3Bhbj5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImQtZ3JpZCBnYXAtMlwiPlxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLWxnIGJ0bi1vdXRsaW5lLWRhcmsgYnV5QnRuIGZzLTYgcC0zXCIgaWQ9JHtcclxuICAgICAgICAgICAgX3Byb2R1Y3QuaW5kZXhcclxuICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgIEJ1eSBmb3IgJHtfcHJvZHVjdC5wcmljZX0gY1VTRFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxufVxyXG5cclxuZnVuY3Rpb24gaWRlbnRpY29uVGVtcGxhdGUoX2FkZHJlc3MpIHtcclxuICBjb25zdCBpY29uID0gYmxvY2tpZXNcclxuICAgIC5jcmVhdGUoe1xyXG4gICAgICBzZWVkOiBfYWRkcmVzcyxcclxuICAgICAgc2l6ZTogOCxcclxuICAgICAgc2NhbGU6IDE2LFxyXG4gICAgfSlcclxuICAgIC50b0RhdGFVUkwoKVxyXG5cclxuICByZXR1cm4gYFxyXG4gIDxkaXYgY2xhc3M9XCJyb3VuZGVkLWNpcmNsZSBvdmVyZmxvdy1oaWRkZW4gZC1pbmxpbmUtYmxvY2sgYm9yZGVyIGJvcmRlci13aGl0ZSBib3JkZXItMiBzaGFkb3ctc20gbS0wXCI+XHJcbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9hbGZham9yZXMtYmxvY2tzY291dC5jZWxvLXRlc3RuZXQub3JnL2FkZHJlc3MvJHtfYWRkcmVzc30vdHJhbnNhY3Rpb25zXCJcclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIiR7aWNvbn1cIiB3aWR0aD1cIjQ4XCIgYWx0PVwiJHtfYWRkcmVzc31cIj5cclxuICAgIDwvYT5cclxuICA8L2Rpdj5cclxuICBgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vdGlmaWNhdGlvbihfdGV4dCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxlcnRcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90aWZpY2F0aW9uXCIpLnRleHRDb250ZW50ID0gX3RleHRcclxufVxyXG5cclxuZnVuY3Rpb24gbm90aWZpY2F0aW9uT2ZmKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxlcnRcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgbm90aWZpY2F0aW9uKFwi4oybIExvYWRpbmcuLi5cIilcclxuICBnZXRCYWxhbmNlKClcclxuICByZW5kZXJQcm9kdWN0cygpXHJcbiAgbm90aWZpY2F0aW9uT2ZmKClcclxufSlcclxuXHJcbmRvY3VtZW50XHJcbiAgLnF1ZXJ5U2VsZWN0b3IoXCIjbmV3UHJvZHVjdEJ0blwiKVxyXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgX3Byb2R1Y3QgPSB7XHJcbiAgICAgIG93bmVyOiBcIjB4MkVGNDhGMzJlQjBBRUI5MDc3OEEyMTcwYTA1NThBOTQxYjcyQkZGYlwiLFxyXG4gICAgICBuYW1lOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2R1Y3ROYW1lXCIpLnZhbHVlLFxyXG4gICAgICBpbWFnZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdJbWdVcmxcIikudmFsdWUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2R1Y3REZXNjcmlwdGlvblwiKS52YWx1ZSxcclxuICAgICAgbG9jYXRpb246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3TG9jYXRpb25cIikudmFsdWUsXHJcbiAgICAgIHByaWNlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1ByaWNlXCIpLnZhbHVlLFxyXG4gICAgICBzb2xkOiAwLFxyXG4gICAgICBpbmRleDogcHJvZHVjdHMubGVuZ3RoLFxyXG4gICAgfVxyXG4gICAgcHJvZHVjdHMucHVzaChfcHJvZHVjdClcclxuICAgIG5vdGlmaWNhdGlvbihg8J+OiSBZb3Ugc3VjY2Vzc2Z1bGx5IGFkZGVkIFwiJHtfcHJvZHVjdC5uYW1lfVwiLmApXHJcbiAgICByZW5kZXJQcm9kdWN0cygpXHJcbiAgfSlcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFya2V0cGxhY2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgaWYoZS50YXJnZXQuY2xhc3NOYW1lLmluY2x1ZGVzKFwiYnV5QnRuXCIpKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LmlkXHJcbiAgICBwcm9kdWN0c1tpbmRleF0uc29sZCsrXHJcbiAgICBub3RpZmljYXRpb24oYPCfjokgWW91IHN1Y2Nlc3NmdWxseSBib3VnaHQgXCIke3Byb2R1Y3RzW2luZGV4XS5uYW1lfVwiLmApXHJcbiAgICByZW5kZXJQcm9kdWN0cygpXHJcbiAgfVxyXG59KSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

/******/ });
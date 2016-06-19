/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var card_1 = __webpack_require__(3);
	var card_2 = __webpack_require__(3);
	var card1 = {
	    cardType: card_2.CardType.Status,
	    cardDetails: {
	        isLikedByMe: false,
	        likeCount: 0
	    },
	    cardMedia: {
	        text: "some test text; badescuga",
	        imageUrl: "www.gsp.ro/1.jpg"
	    }
	};
	ReactDOM.render(React.createElement(card_1.Card, {cardType: card1.cardType, cardDetails: card1.cardDetails, cardMedia: card1.cardMedia}), document.getElementById("main"));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../../typings/index.d.ts" />
	var React = __webpack_require__(1);
	var buttons_1 = __webpack_require__(4);
	(function (CardType) {
	    CardType[CardType["None"] = 0] = "None";
	    CardType[CardType["Status"] = 1] = "Status";
	    CardType[CardType["Image"] = 2] = "Image";
	})(exports.CardType || (exports.CardType = {}));
	var CardType = exports.CardType;
	var Card = (function (_super) {
	    __extends(Card, _super);
	    // state: CardParams;
	    function Card(props) {
	        _super.call(this, props);
	        this.props = props;
	        console.log("in card constructor");
	        console.dir("card type: " + props.cardType);
	    }
	    Card.prototype.componentWillReceiveProps = function (nextProps) {
	    };
	    Card.prototype.render = function () {
	        console.dir(this.props.cardDetails);
	        console.dir(this.props.cardMedia);
	        console.dir(this.props.cardType);
	        if (this.props.cardType === CardType.Status) {
	            return (React.createElement("div", null, React.createElement("p", null, "Text card"), React.createElement("p", null, this.props.cardMedia.text), React.createElement(buttons_1.CardButton, {buttonText: "Like", isPressed: this.props.cardDetails.isLikedByMe})));
	        }
	        else {
	            return (React.createElement("div", null, React.createElement("p", null, "Image card"), React.createElement("p", null, " ", this.props.cardMedia.text, " "), React.createElement("img", {src: this.props.cardMedia.imageUrl}), React.createElement(buttons_1.CardButton, {buttonText: "Like", isPressed: this.props.cardDetails.isLikedByMe})));
	        }
	    };
	    return Card;
	}(React.Component));
	exports.Card = Card;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../../typings/index.d.ts" />
	var React = __webpack_require__(1);
	var CardButton = (function (_super) {
	    __extends(CardButton, _super);
	    function CardButton(props) {
	        var _this = this;
	        _super.call(this, props);
	        this.buttClicked = function () {
	            console.log(_this.props.buttonText + ' button clicked! status: ' + _this.props.isPressed);
	        };
	    }
	    CardButton.prototype.componentWillMount = function () {
	        console.log('comp will mount');
	    };
	    CardButton.prototype.render = function () {
	        return (React.createElement("button", {onClick: this.buttClicked}, this.props.buttonText));
	    };
	    return CardButton;
	}(React.Component));
	exports.CardButton = CardButton;
	//export default CardLikeButton; 


/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map
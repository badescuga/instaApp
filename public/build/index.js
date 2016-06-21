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
	    cardType: card_2.CardType.Image,
	    cardId: "card1234",
	    cardDetails: {
	        isLikedByMe: false,
	        likeCount: 3
	    },
	    cardMedia: {
	        text: "some test text; badescuga",
	        imageUrl: "http://img-9gag-fun.9cache.com/photo/a4j4BAw_700b_v1.jpg"
	    }
	};
	var card2 = {
	    cardId: "card35335",
	    cardType: card_2.CardType.Text,
	    cardDetails: {
	        isLikedByMe: true,
	        likeCount: 1
	    },
	    cardMedia: {
	        text: "some test 2 text"
	    }
	};
	var cards = [card1, card2];
	ReactDOM.render(React.createElement("div", null, cards.map(function (item) {
	    return (React.createElement(card_1.Card, {key: item.cardId, cardId: item.cardId, cardType: item.cardType, cardDetails: item.cardDetails, cardMedia: item.cardMedia}));
	})), document.getElementById("mainContainer"));
	//================================================
	function getCardById(id) {
	    for (var i = 0; i < cards.length; i++) {
	        console.dir(cards[i].cardId);
	        if (cards[i].cardId === id) {
	            console.log("found card! ");
	            return cards[i];
	        }
	    }
	    return null;
	}
	function toggleLikeStatus(cardId) {
	    var card = getCardById(cardId);
	    console.dir(card);
	    if (card) {
	        console.log("card with Id " + cardId + " could not be found; can't toggle like button");
	    }
	    card.cardDetails.isLikedByMe = !card.cardDetails.isLikedByMe; // toggle the like button
	    if (card.cardDetails.isLikedByMe) {
	        card.cardDetails.likeCount++;
	    }
	    else {
	        card.cardDetails.likeCount--;
	    }
	    if (card.cardDetails.likeCount < 0) {
	        card.cardDetails.likeCount = 0;
	    }
	}
	toggleLikeStatus("card1234");
	console.dir(cards);


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
	    CardType[CardType["Text"] = 1] = "Text";
	    CardType[CardType["Image"] = 2] = "Image";
	})(exports.CardType || (exports.CardType = {}));
	var CardType = exports.CardType;
	var Card = (function (_super) {
	    __extends(Card, _super);
	    function Card(props) {
	        var _this = this;
	        _super.call(this, props);
	        this.likeButtonClicked = function () {
	            console.log('in card => like button clicked!');
	            var _isLikedByMe = _this.state.isLikedByMe;
	            var _likeCount = _this.state.likeCount;
	            if (_isLikedByMe) {
	                _likeCount--;
	            }
	            else {
	                _likeCount++;
	            }
	            _isLikedByMe = !_isLikedByMe;
	            _this.setState({
	                isLikedByMe: _isLikedByMe,
	                likeCount: _likeCount
	            });
	        };
	        console.log("in card constructor");
	        console.log("card type: " + props.cardType);
	        // this.state = { // setting state from props in getInitialState is not good practice
	        //     isLikedByMe: props.cardDetails.isLikedByMe,
	        //     likeCount: props.cardDetails.likeCount
	        // };
	    }
	    Card.prototype.componentWillMount = function () {
	        this.setState({
	            isLikedByMe: this.props.cardDetails.isLikedByMe,
	            likeCount: this.props.cardDetails.likeCount
	        });
	    };
	    Card.prototype.componentWillReceiveProps = function (nextProps) {
	        this.setState({
	            isLikedByMe: nextProps.cardDetails.isLikedByMe,
	            likeCount: nextProps.cardDetails.likeCount
	        });
	    };
	    Card.prototype.render = function () {
	        console.log("RENDERING CARD");
	        // console.dir(this.props.cardDetails);
	        // console.dir(this.props.cardMedia);
	        // console.dir(this.props.cardType);
	        if (this.props.cardType === CardType.Text) {
	            return (React.createElement("div", {className: "general-card"}, React.createElement("p", null, "Text card.ID: ", this.props.cardId), React.createElement("p", null, this.props.cardMedia.text), React.createElement(buttons_1.CardLikeButton, {onButClick: this.likeButtonClicked, buttonText: this.state.isLikedByMe ? "Liked" : "Like", isPressed: this.state.isLikedByMe}), React.createElement("p", null, "Like count: ", this.state.likeCount)));
	        }
	        else {
	            return (React.createElement("div", {className: "general-card"}, React.createElement("p", null, "Image card.ID: ", this.props.cardId), React.createElement("p", null, " ", this.props.cardMedia.text, " "), React.createElement("img", {src: this.props.cardMedia.imageUrl}), React.createElement("br", null), React.createElement(buttons_1.CardLikeButton, {onButClick: this.likeButtonClicked, buttonText: this.state.isLikedByMe ? "Liked" : "Like", isPressed: this.state.isLikedByMe}), React.createElement("p", null, "Like count: ", this.state.likeCount)));
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
	var CardLikeButton = (function (_super) {
	    __extends(CardLikeButton, _super);
	    function CardLikeButton(props) {
	        var _this = this;
	        _super.call(this, props);
	        this.buttClicked = function () {
	            console.log(_this.props.buttonText + ' button clicked! status: ' + _this.props.isPressed);
	            _this.props.onButClick();
	        };
	    }
	    CardLikeButton.prototype.componentWillMount = function () {
	        console.log('comp will mount');
	    };
	    CardLikeButton.prototype.render = function () {
	        return (React.createElement("button", {className: "general-button", onClick: this.buttClicked}, this.props.buttonText));
	    };
	    return CardLikeButton;
	}(React.Component));
	exports.CardLikeButton = CardLikeButton;
	//export default CardLikeButton; 


/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map
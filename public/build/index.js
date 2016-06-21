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
	var timeline_1 = __webpack_require__(3);
	// var card1: CardParams = {
	//     cardType: CardType.Image,
	//     cardId: "card1234",
	//     cardDetails: {
	//         isLikedByMe: false,
	//         likeCount: 3
	//     },
	//     cardMedia: {
	//         text: "some test text; badescuga",
	//         imageUrl: "http://img-9gag-fun.9cache.com/photo/a4j4BAw_700b_v1.jpg"
	//     }
	// };
	// var card2: CardParams = {
	//     cardId: "card35335",
	//     cardType: CardType.Text,
	//     cardDetails: {
	//         isLikedByMe: true,
	//         likeCount: 1
	//     },
	//     cardMedia: {
	//         text: "some test 2 text"
	//     }
	// };
	// var cards = [card1, card2];
	ReactDOM.render(React.createElement(timeline_1.Timeline, null), document.getElementById("mainContainer"));
	//================================================
	// function getCardById(id: string): CardParams {
	//     for (var i = 0; i < cards.length; i++) {
	//         console.dir(cards[i].cardId);
	//         if (cards[i].cardId === id) {
	//             console.log("found card! ");
	//             return cards[i];
	//         }
	//     }
	//     return null;
	// }
	// function toggleLikeStatus(cardId: string) {
	//     var card = getCardById(cardId);
	//     console.dir(card);
	//     if (card) {
	//         console.log(`card with Id ${cardId} could not be found; can't toggle like button`)
	//     }
	//     card.cardDetails.isLikedByMe = !card.cardDetails.isLikedByMe; // toggle the like button
	//     if (card.cardDetails.isLikedByMe) {
	//         card.cardDetails.likeCount++;
	//     } else {
	//         card.cardDetails.likeCount--;
	//     }
	//     if (card.cardDetails.likeCount < 0) {//make sure like count is >= 0
	//         card.cardDetails.likeCount = 0;
	//     }
	// }
	// toggleLikeStatus("card1234");
	// console.dir(cards);


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

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var general_card_1 = __webpack_require__(4);
	var CardStore = __webpack_require__(12);
	function getCardState() {
	    return {
	        cards: CardStore.getAll()
	    };
	}
	var Timeline = (function (_super) {
	    __extends(Timeline, _super);
	    function Timeline(props) {
	        var _this = this;
	        _super.call(this, props);
	        this._onChange = function () {
	            _this.setState(getCardState());
	        };
	        this.componentDidMount = function () {
	            CardStore.addChangeListener(_this._onChange);
	        };
	        this.componentWillUnmount = function () {
	            CardStore.removeChangeListener(_this._onChange);
	        };
	        this.state = getCardState();
	    }
	    Timeline.prototype.render = function () {
	        return (React.createElement("div", null, this.state.cards.map(function (item) {
	            return (React.createElement(general_card_1.Card, {key: item.cardId, cardId: item.cardId, cardType: item.cardType, cardDetails: item.cardDetails, cardMedia: item.cardMedia}));
	        })));
	    };
	    return Timeline;
	}(React.Component));
	exports.Timeline = Timeline;


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
	var buttons_1 = __webpack_require__(5);
	(function (CardType) {
	    CardType[CardType["None"] = 0] = "None";
	    CardType[CardType["Text"] = 1] = "Text";
	    CardType[CardType["Image"] = 2] = "Image";
	})(exports.CardType || (exports.CardType = {}));
	var CardType = exports.CardType;
	var Card = (function (_super) {
	    __extends(Card, _super);
	    // state: CardDetails;
	    function Card(props) {
	        _super.call(this, props);
	        console.log("in card constructor");
	        console.log("card type: " + props.cardType);
	        // this.state = { // setting state from props in getInitialState is not good practice
	        //     isLikedByMe: props.cardDetails.isLikedByMe,
	        //     likeCount: props.cardDetails.likeCount
	        // };
	    }
	    Card.prototype.componentWillMount = function () {
	        // this.setState({
	        //     isLikedByMe: this.props.cardDetails.isLikedByMe,
	        //     likeCount: this.props.cardDetails.likeCount
	        // });
	    };
	    Card.prototype.componentWillReceiveProps = function (nextProps) {
	        // this.setState({
	        //     isLikedByMe: nextProps.cardDetails.isLikedByMe,
	        //     likeCount: nextProps.cardDetails.likeCount
	        // });
	    };
	    Card.prototype.render = function () {
	        console.log("RENDERING CARD " + this.props.cardId);
	        // console.dir(this.props.cardDetails);
	        // console.dir(this.props.cardMedia);
	        // console.dir(this.props.cardType);
	        if (this.props.cardType === CardType.Text) {
	            return (React.createElement("div", {className: "general-card"}, React.createElement("p", null, "Text card.ID: ", this.props.cardId), React.createElement("p", null, this.props.cardMedia.text), React.createElement(buttons_1.CardLikeButton, {cardId: this.props.cardId, buttonText: this.props.cardDetails.isLikedByMe ? "Liked" : "Like", isPressed: this.props.cardDetails.isLikedByMe}), React.createElement("p", null, "Like count: ", this.props.cardDetails.likeCount)));
	        }
	        else {
	            return (React.createElement("div", {className: "general-card"}, React.createElement("p", null, "Image card.ID: ", this.props.cardId), React.createElement("p", null, " ", this.props.cardMedia.text, " "), React.createElement("img", {src: this.props.cardMedia.imageUrl}), React.createElement("br", null), React.createElement(buttons_1.CardLikeButton, {cardId: this.props.cardId, buttonText: this.props.cardDetails.isLikedByMe ? "Liked" : "Like", isPressed: this.props.cardDetails.isLikedByMe}), React.createElement("p", null, "Like count: ", this.props.cardDetails.likeCount)));
	        }
	    };
	    return Card;
	}(React.Component));
	exports.Card = Card;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../../typings/index.d.ts" />
	var React = __webpack_require__(1);
	var actions_1 = __webpack_require__(6);
	var CardLikeButton = (function (_super) {
	    __extends(CardLikeButton, _super);
	    function CardLikeButton(props) {
	        var _this = this;
	        _super.call(this, props);
	        this.buttClicked = function () {
	            console.log(_this.props.buttonText + ' button clicked! status: ' + _this.props.isPressed);
	            console.log('in card => like button clicked! card id:' + _this.props.cardId);
	            actions_1.CardActions.toggleLikeButton(_this.props.cardId);
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


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path='./cardstore.tsx'/>
	"use strict";
	var dispatcher_1 = __webpack_require__(7);
	var constants_1 = __webpack_require__(11);
	var CardActionsStatic = (function () {
	    function CardActionsStatic() {
	        // so jshint won't bark
	        this.CardActionID = constants_1.CardActionID;
	    }
	    CardActionsStatic.prototype.toggleLikeButton = function (_cardId) {
	        dispatcher_1.AppDispatcher.dispatch({
	            actionType: constants_1.CardActionID.TOGGLE_LIKE_STATUS,
	            id: _cardId
	        });
	    };
	    return CardActionsStatic;
	}());
	var CardActions = new CardActionsStatic();
	exports.CardActions = CardActions;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var flux = __webpack_require__(8);
	var AppDispatcher = new flux.Dispatcher();
	exports.AppDispatcher = AppDispatcher;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	module.exports.Dispatcher = __webpack_require__(9)


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Dispatcher
	 * @typechecks
	 */
	
	"use strict";
	
	var invariant = __webpack_require__(10);
	
	var _lastID = 1;
	var _prefix = 'ID_';
	
	/**
	 * Dispatcher is used to broadcast payloads to registered callbacks. This is
	 * different from generic pub-sub systems in two ways:
	 *
	 *   1) Callbacks are not subscribed to particular events. Every payload is
	 *      dispatched to every registered callback.
	 *   2) Callbacks can be deferred in whole or part until other callbacks have
	 *      been executed.
	 *
	 * For example, consider this hypothetical flight destination form, which
	 * selects a default city when a country is selected:
	 *
	 *   var flightDispatcher = new Dispatcher();
	 *
	 *   // Keeps track of which country is selected
	 *   var CountryStore = {country: null};
	 *
	 *   // Keeps track of which city is selected
	 *   var CityStore = {city: null};
	 *
	 *   // Keeps track of the base flight price of the selected city
	 *   var FlightPriceStore = {price: null}
	 *
	 * When a user changes the selected city, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'city-update',
	 *     selectedCity: 'paris'
	 *   });
	 *
	 * This payload is digested by `CityStore`:
	 *
	 *   flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'city-update') {
	 *       CityStore.city = payload.selectedCity;
	 *     }
	 *   });
	 *
	 * When the user selects a country, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'country-update',
	 *     selectedCountry: 'australia'
	 *   });
	 *
	 * This payload is digested by both stores:
	 *
	 *    CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       CountryStore.country = payload.selectedCountry;
	 *     }
	 *   });
	 *
	 * When the callback to update `CountryStore` is registered, we save a reference
	 * to the returned token. Using this token with `waitFor()`, we can guarantee
	 * that `CountryStore` is updated before the callback that updates `CityStore`
	 * needs to query its data.
	 *
	 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       // `CountryStore.country` may not be updated.
	 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
	 *       // `CountryStore.country` is now guaranteed to be updated.
	 *
	 *       // Select the default city for the new country
	 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
	 *     }
	 *   });
	 *
	 * The usage of `waitFor()` can be chained, for example:
	 *
	 *   FlightPriceStore.dispatchToken =
	 *     flightDispatcher.register(function(payload) {
	 *       switch (payload.actionType) {
	 *         case 'country-update':
	 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
	 *           FlightPriceStore.price =
	 *             getFlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *
	 *         case 'city-update':
	 *           FlightPriceStore.price =
	 *             FlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *     }
	 *   });
	 *
	 * The `country-update` payload will be guaranteed to invoke the stores'
	 * registered callbacks in order: `CountryStore`, `CityStore`, then
	 * `FlightPriceStore`.
	 */
	
	  function Dispatcher() {
	    this.$Dispatcher_callbacks = {};
	    this.$Dispatcher_isPending = {};
	    this.$Dispatcher_isHandled = {};
	    this.$Dispatcher_isDispatching = false;
	    this.$Dispatcher_pendingPayload = null;
	  }
	
	  /**
	   * Registers a callback to be invoked with every dispatched payload. Returns
	   * a token that can be used with `waitFor()`.
	   *
	   * @param {function} callback
	   * @return {string}
	   */
	  Dispatcher.prototype.register=function(callback) {
	    var id = _prefix + _lastID++;
	    this.$Dispatcher_callbacks[id] = callback;
	    return id;
	  };
	
	  /**
	   * Removes a callback based on its token.
	   *
	   * @param {string} id
	   */
	  Dispatcher.prototype.unregister=function(id) {
	    invariant(
	      this.$Dispatcher_callbacks[id],
	      'Dispatcher.unregister(...): `%s` does not map to a registered callback.',
	      id
	    );
	    delete this.$Dispatcher_callbacks[id];
	  };
	
	  /**
	   * Waits for the callbacks specified to be invoked before continuing execution
	   * of the current callback. This method should only be used by a callback in
	   * response to a dispatched payload.
	   *
	   * @param {array<string>} ids
	   */
	  Dispatcher.prototype.waitFor=function(ids) {
	    invariant(
	      this.$Dispatcher_isDispatching,
	      'Dispatcher.waitFor(...): Must be invoked while dispatching.'
	    );
	    for (var ii = 0; ii < ids.length; ii++) {
	      var id = ids[ii];
	      if (this.$Dispatcher_isPending[id]) {
	        invariant(
	          this.$Dispatcher_isHandled[id],
	          'Dispatcher.waitFor(...): Circular dependency detected while ' +
	          'waiting for `%s`.',
	          id
	        );
	        continue;
	      }
	      invariant(
	        this.$Dispatcher_callbacks[id],
	        'Dispatcher.waitFor(...): `%s` does not map to a registered callback.',
	        id
	      );
	      this.$Dispatcher_invokeCallback(id);
	    }
	  };
	
	  /**
	   * Dispatches a payload to all registered callbacks.
	   *
	   * @param {object} payload
	   */
	  Dispatcher.prototype.dispatch=function(payload) {
	    invariant(
	      !this.$Dispatcher_isDispatching,
	      'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.'
	    );
	    this.$Dispatcher_startDispatching(payload);
	    try {
	      for (var id in this.$Dispatcher_callbacks) {
	        if (this.$Dispatcher_isPending[id]) {
	          continue;
	        }
	        this.$Dispatcher_invokeCallback(id);
	      }
	    } finally {
	      this.$Dispatcher_stopDispatching();
	    }
	  };
	
	  /**
	   * Is this Dispatcher currently dispatching.
	   *
	   * @return {boolean}
	   */
	  Dispatcher.prototype.isDispatching=function() {
	    return this.$Dispatcher_isDispatching;
	  };
	
	  /**
	   * Call the callback stored with the given id. Also do some internal
	   * bookkeeping.
	   *
	   * @param {string} id
	   * @internal
	   */
	  Dispatcher.prototype.$Dispatcher_invokeCallback=function(id) {
	    this.$Dispatcher_isPending[id] = true;
	    this.$Dispatcher_callbacks[id](this.$Dispatcher_pendingPayload);
	    this.$Dispatcher_isHandled[id] = true;
	  };
	
	  /**
	   * Set up bookkeeping needed when dispatching.
	   *
	   * @param {object} payload
	   * @internal
	   */
	  Dispatcher.prototype.$Dispatcher_startDispatching=function(payload) {
	    for (var id in this.$Dispatcher_callbacks) {
	      this.$Dispatcher_isPending[id] = false;
	      this.$Dispatcher_isHandled[id] = false;
	    }
	    this.$Dispatcher_pendingPayload = payload;
	    this.$Dispatcher_isDispatching = true;
	  };
	
	  /**
	   * Clear bookkeeping used for dispatching.
	   *
	   * @internal
	   */
	  Dispatcher.prototype.$Dispatcher_stopDispatching=function() {
	    this.$Dispatcher_pendingPayload = null;
	    this.$Dispatcher_isDispatching = false;
	  };
	
	
	module.exports = Dispatcher;


/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */
	
	"use strict";
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (false) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        'Invariant Violation: ' +
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	(function (CardActionID) {
	    CardActionID[CardActionID["TOGGLE_LIKE_STATUS"] = 0] = "TOGGLE_LIKE_STATUS";
	})(exports.CardActionID || (exports.CardActionID = {}));
	var CardActionID = exports.CardActionID;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path='../../../typings/index.d.ts'/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var dispatcher_1 = __webpack_require__(7);
	var constants_1 = __webpack_require__(11);
	var EventEmitter = __webpack_require__(13);
	var general_card_1 = __webpack_require__(4);
	var CHANGE_EVENT = 'change';
	var card1 = {
	    cardType: general_card_1.CardType.Image,
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
	    cardType: general_card_1.CardType.Text,
	    cardDetails: {
	        isLikedByMe: true,
	        likeCount: 1
	    },
	    cardMedia: {
	        text: "some test 2 text"
	    }
	};
	var _cards = [card1, card2];
	function getCardById(id) {
	    for (var i = 0; i < _cards.length; i++) {
	        if (_cards[i].cardId === id) {
	            return _cards[i];
	        }
	    }
	    return null;
	}
	function toggleLikeStatus(cardId) {
	    console.log("searching to toggle card with id:" + cardId);
	    var card = getCardById(cardId);
	    if (card === null) {
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
	var CardStoreStatic = (function (_super) {
	    __extends(CardStoreStatic, _super);
	    function CardStoreStatic() {
	        _super.apply(this, arguments);
	    }
	    CardStoreStatic.prototype.getAll = function () {
	        return _cards;
	    };
	    CardStoreStatic.prototype.emitChange = function () {
	        this.emit(CHANGE_EVENT);
	    };
	    /**
	     * @param {function} callback
	     */
	    CardStoreStatic.prototype.addChangeListener = function (callback) {
	        this.on(CHANGE_EVENT, callback);
	    };
	    /**
	     * @param {function} callback
	     */
	    CardStoreStatic.prototype.removeChangeListener = function (callback) {
	        this.removeListener(CHANGE_EVENT, callback);
	    };
	    return CardStoreStatic;
	}(EventEmitter));
	var CardStore = new CardStoreStatic();
	// Register callback to handle all updates
	dispatcher_1.AppDispatcher.register(function (action) {
	    var text;
	    switch (action.actionType) {
	        case constants_1.CardActionID.TOGGLE_LIKE_STATUS:
	            //   text = action.text.trim();
	            //   if (text !== '') {
	            //      create(text);
	            //   }
	            console.log('in the dispatcher; calling toggle like status');
	            toggleLikeStatus(action.id);
	            CardStore.emitChange();
	            break;
	    }
	});
	module.exports = CardStore;


/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	//
	// We store our EE objects in a plain object whose properties are event names.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// `~` to make sure that the built-in object properties are not overridden or
	// used as an attack vector.
	// We also assume that `Object.create(null)` is available when the event name
	// is an ES6 Symbol.
	//
	var prefix = typeof Object.create !== 'function' ? '~' : false;
	
	/**
	 * Representation of a single EventEmitter function.
	 *
	 * @param {Function} fn Event handler to be called.
	 * @param {Mixed} context Context for function execution.
	 * @param {Boolean} once Only emit once
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}
	
	/**
	 * Minimal EventEmitter interface that is molded against the Node.js
	 * EventEmitter interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() { /* Nothing to set */ }
	
	/**
	 * Holds the assigned EventEmitters by name.
	 *
	 * @type {Object}
	 * @private
	 */
	EventEmitter.prototype._events = undefined;
	
	/**
	 * Return a list of assigned event listeners.
	 *
	 * @param {String} event The events that should be listed.
	 * @param {Boolean} exists We only need to know if there are listeners.
	 * @returns {Array|Boolean}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event, exists) {
	  var evt = prefix ? prefix + event : event
	    , available = this._events && this._events[evt];
	
	  if (exists) return !!available;
	  if (!available) return [];
	  if (this._events[evt].fn) return [this._events[evt].fn];
	
	  for (var i = 0, l = this._events[evt].length, ee = new Array(l); i < l; i++) {
	    ee[i] = this._events[evt][i].fn;
	  }
	
	  return ee;
	};
	
	/**
	 * Emit an event to all registered event listeners.
	 *
	 * @param {String} event The name of the event.
	 * @returns {Boolean} Indication if we've emitted an event.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;
	
	  if (!this._events || !this._events[evt]) return false;
	
	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;
	
	  if ('function' === typeof listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
	
	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }
	
	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }
	
	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;
	
	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
	
	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }
	
	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }
	
	  return true;
	};
	
	/**
	 * Register a new EventListener for the given event.
	 *
	 * @param {String} event Name of the event.
	 * @param {Functon} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this)
	    , evt = prefix ? prefix + event : event;
	
	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }
	
	  return this;
	};
	
	/**
	 * Add an EventListener that's only called once.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true)
	    , evt = prefix ? prefix + event : event;
	
	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }
	
	  return this;
	};
	
	/**
	 * Remove event listeners.
	 *
	 * @param {String} event The event we want to remove.
	 * @param {Function} fn The listener that we need to find.
	 * @param {Mixed} context Only remove listeners matching this context.
	 * @param {Boolean} once Only remove once listeners.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;
	
	  if (!this._events || !this._events[evt]) return this;
	
	  var listeners = this._events[evt]
	    , events = [];
	
	  if (fn) {
	    if (listeners.fn) {
	      if (
	           listeners.fn !== fn
	        || (once && !listeners.once)
	        || (context && listeners.context !== context)
	      ) {
	        events.push(listeners);
	      }
	    } else {
	      for (var i = 0, length = listeners.length; i < length; i++) {
	        if (
	             listeners[i].fn !== fn
	          || (once && !listeners[i].once)
	          || (context && listeners[i].context !== context)
	        ) {
	          events.push(listeners[i]);
	        }
	      }
	    }
	  }
	
	  //
	  // Reset the array, or remove it completely if we have no more listeners.
	  //
	  if (events.length) {
	    this._events[evt] = events.length === 1 ? events[0] : events;
	  } else {
	    delete this._events[evt];
	  }
	
	  return this;
	};
	
	/**
	 * Remove all listeners or only the listeners for the specified event.
	 *
	 * @param {String} event The event want to remove all listeners for.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  if (!this._events) return this;
	
	  if (event) delete this._events[prefix ? prefix + event : event];
	  else this._events = prefix ? {} : Object.create(null);
	
	  return this;
	};
	
	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;
	
	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};
	
	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;
	
	//
	// Expose the module.
	//
	module.exports = EventEmitter;


/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map
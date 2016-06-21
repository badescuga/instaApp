///<reference path='../../../typings/index.d.ts'/>

import { AppDispatcher, CardAction } from './dispatcher';
import { CardActionID } from './constants';
import assign = require('object-assign');
import EventEmitter = require('eventemitter3');
import {CardParams, CardType} from '../card';

var CHANGE_EVENT = 'change';

var card1: CardParams = {
    cardType: CardType.Image,
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

var card2: CardParams = {
    cardId: "card35335",
    cardType: CardType.Text,
    cardDetails: {
        isLikedByMe: true,
        likeCount: 1
    },
    cardMedia: {
        text: "some test 2 text"
    }
};

var _cards: CardParams[] = [card1, card2];

function getCardById(id: string): CardParams {
    var card = null;

    for (var i = 0; i < _cards.length; i++) {
        if (_cards[i].cardId === id) {
            return _cards[i];
        }
    }

    return null;
}

function toggleLikeStatus(cardId: string) {
    var card = getCardById(cardId);
    if (card == null) {
        console.log(`card with Id ${cardId} could not be found; can't toggle like button`)
    }

    card.cardDetails.isLikedByMe = !card.cardDetails.isLikedByMe; // toggle the like button

    if (card.cardDetails.isLikedByMe) {
        card.cardDetails.likeCount++;
    } else {
        card.cardDetails.likeCount--;
    }

    if (card.cardDetails.likeCount < 0) {//make sure like count is >= 0
        card.cardDetails.likeCount = 0;
    }
}

class CardStoreStatic extends EventEmitter {


    public getAll() {
        return _cards;
    }

    public emitChange(): void {
        this.emit(CHANGE_EVENT);
    }

    /**
     * @param {function} callback
     */
    public addChangeListener(callback: () => void): void {
        this.on(CHANGE_EVENT, callback);
    }

    /**
     * @param {function} callback
     */
    public removeChangeListener(callback: () => void) {
        this.removeListener(CHANGE_EVENT, callback);
    }

}

var CardStore: CardStoreStatic = new CardStoreStatic();

// Register callback to handle all updates
AppDispatcher.register(function (action: CardAction): void {
    var text: string;

    switch (action.actionType) {
        case CardActionID.TOGGLE_LIKE_STATUS:
            //   text = action.text.trim();
            //   if (text !== '') {
            //      create(text);
            //   }
            toggleLikeStatus(action.id);

            CardStore.emitChange();
            break;

    }
});


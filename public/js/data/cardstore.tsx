///<reference path='../../../typings/index.d.ts'/>

import { AppDispatcher, CardAction } from './dispatcher';
import { CardActionID } from './constants';
import assign = require('object-assign');
import EventEmitter = require('eventemitter3');
import {CardParams, CardType} from '../general-card';
var Guid = require('guid');

var CHANGE_EVENT = 'change';

var card1: CardParams = {
    cardType: CardType.Image,
    cardId: "f54c2164-cc7b-de70-b7d5-d893f6338acb",
    cardDetails: {
        isLikedByMe: false,
        likeCount: 3
    },
    cardMedia: {
        text: "some test text; badescuga",
        imageUrl: "http://img-9gag-fun.9cache.com/photo/a4j4BAw_700b_v1.jpg"
    },
    createdAt: Date.now()

};

var card2: CardParams = {
    cardId: "477f42c7-b216-c7f0-49a4-9d6e86ac282b",
    cardType: CardType.Text,
    cardDetails: {
        isLikedByMe: true,
        likeCount: 1
    },
    cardMedia: {
        text: "some test 2 text"
    },
    createdAt: Date.now()
};

var _cards: CardParams[] = [card1, card2];

function getCardById(id: string): CardParams {

    for (var i = 0; i < _cards.length; i++) {
        if (_cards[i].cardId === id) {
            return _cards[i];
        }
    }

    return null;
}

function toggleLikeStatus(cardId: string) {
    console.log("searching to toggle card with id:" + cardId);
    var card = getCardById(cardId);
    if (card === null) {
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

function addNewCardPost(text: string, imageUrl: string) {

    var cardType = imageUrl ? CardType.Image : CardType.Text;
    var randId = Guid.raw();
    console.log('rand id is: ' + randId);
    var newCard: CardParams = {
        cardId: randId,
        cardType: cardType,
        cardDetails: {
            isLikedByMe: false,
            likeCount: 0
        },
        cardMedia: {
            text: text,
            imageUrl: imageUrl
        },
        createdAt: Date.now()
    }

    _cards.push(newCard);
}

class CardStoreStatic extends EventEmitter {


    public getAll() {
        _cards.sort((a, b) => {
            if (a.createdAt < b.createdAt) {
                return 1;
            }
            return 0;
        });
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
            console.log('in the dispatcher; calling toggle like status');
            toggleLikeStatus(action.id);

            CardStore.emitChange();
            break;

        case CardActionID.ADD_NEW_CARD:
            console.log('in the dispatcher; calling add new card');
            addNewCardPost(action.text, action.imageUrl);

            CardStore.emitChange();
            break;
    }
});

export = CardStore;

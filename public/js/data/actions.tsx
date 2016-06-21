///<reference path='./cardstore.tsx'/>

import AppDispatcher = require('./dispatcher');
import { CardActionID } from './constants';


class CardActionsStatic {

    // so jshint won't bark
    public CardActionID = CardActionID;


    public toggleLikeButton(cardId: number) {
        AppDispatcher.dispatch({
            actionType: CardActionID.TOGGLE_LIKE_STATUS,
            cardId: cardId
        });
    }
}

var CardActions: CardActionsStatic = new CardActionsStatic();

export = CardActions;
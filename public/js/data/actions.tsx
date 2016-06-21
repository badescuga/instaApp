///<reference path='./cardstore.tsx'/>

import { AppDispatcher } from './dispatcher';
import { CardActionID } from './constants';


class CardActionsStatic {

    // so jshint won't bark
    public CardActionID = CardActionID;


    public toggleLikeButton(_cardId: string) {
        AppDispatcher.dispatch({
            actionType: CardActionID.TOGGLE_LIKE_STATUS,
            id: _cardId
        });
    }
}

var CardActions: CardActionsStatic = new CardActionsStatic();

export {CardActions};
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

    public addNewCardPost(text:string, imageUrl:string) {
          AppDispatcher.dispatch({
            actionType: CardActionID.ADD_NEW_CARD,
            text: text,
            imageUrl:imageUrl
        });
    }
}

var CardActions: CardActionsStatic = new CardActionsStatic();

export {CardActions};
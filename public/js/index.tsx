/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import {Card} from "./card";
import {Timeline} from "./timeline";
import {CardParams, CardType, CardMedia, CardDetails} from "./card";

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

ReactDOM.render(
    <Timeline />
    ,
    document.getElementById("mainContainer")
);
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

/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import {Card} from "./card";

import {CardParams, CardType, CardMedia, CardDetails} from "./card";

var card1: CardParams = {
    cardType: CardType.Image,
    cardId: "card1234",
    cardDetails: {
        isLikedByMe: false,
        likeCount: 3
    },
    cardMedia: {
        text: "some test text; badescuga",
        imageUrl: "http://www9.gsp.ro/usr/thumbs/thumb_924_x_600/2016/06/19/738742-rkx1568-lucian-sinmartean.jpg"
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

var cards = [card1, card2];

ReactDOM.render(
    <div>

        {
            cards.map((item) => {
                return (
                    <Card key={item.cardId} cardId={item.cardId} cardType={item.cardType} cardDetails={item.cardDetails} cardMedia={item.cardMedia}/>
                );
            })
        }
    </div>,
    document.getElementById("mainContainer")
);

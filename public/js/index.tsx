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
        likeCount: 0
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

ReactDOM.render(
    <div>
        <Card cardId={card1.cardId} cardType={card1.cardType} cardDetails={card1.cardDetails} cardMedia={card1.cardMedia}/>
        <Card cardId={card2.cardId} cardType={card2.cardType} cardDetails={card2.cardDetails} cardMedia={card2.cardMedia}/>
    </div>,
    document.getElementById("mainContainer")
);

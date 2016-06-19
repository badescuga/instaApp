/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import {Card} from "./card";

import {CardParams, CardType, CardMedia, CardDetails} from "./card";

var card1: CardParams = {
    cardType: CardType.Text,
    cardDetails: {
        isLikedByMe : false,
        likeCount : 0
    },
    cardMedia: {
        text:"some test text; badescuga",
        imageUrl:"www.gsp.ro/1.jpg"
    }
};

ReactDOM.render(
    <Card cardType={card1.cardType} cardDetails={card1.cardDetails} cardMedia={card1.cardMedia}/>,
    document.getElementById("main")
);

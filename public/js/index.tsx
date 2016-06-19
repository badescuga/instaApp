/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import {Card} from "./card";

import {CardParams, CardType, CardMedia, CardDetails} from "./card";

var card1: CardParams = {
    cardType: CardType.Image,
    cardDetails: {
        isLikedByMe : false,
        likeCount : 0
    },
    cardMedia: {
        text:"some test text; badescuga",
        imageUrl:"http://www9.gsp.ro/usr/thumbs/thumb_924_x_600/2016/06/19/738742-rkx1568-lucian-sinmartean.jpg"
    }
};

ReactDOM.render(
    <Card cardType={card1.cardType} cardDetails={card1.cardDetails} cardMedia={card1.cardMedia}/>,
    document.getElementById("main")
);

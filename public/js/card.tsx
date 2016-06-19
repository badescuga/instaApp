/// <reference path="../../typings/index.d.ts" />
import * as React from "react";
import { CardButton } from "./buttons";

export enum CardType {
    None = 0,
    Text,
    Image
}

export interface CardMedia {
    text?: string;
    imageUrl?: string;
}

export interface CardDetails {
    isLikedByMe: boolean;
    likeCount: number;
}


export interface CardParams extends React.Props<any> {
    cardType: number;
    cardMedia: CardMedia;
    cardDetails: CardDetails;
}

export class Card extends React.Component<CardParams, {}> {

   // state: CardParams;

    constructor(props: CardParams) {
        super(props);
        this.props = props;
        console.log("in card constructor");
        console.dir("card type: "+ props.cardType);
    }

    componentWillReceiveProps(nextProps: CardParams) {
    
    }

    render() {
        console.dir(this.props.cardDetails);
        console.dir(this.props.cardMedia);
        console.dir(this.props.cardType);

        if (this.props.cardType === CardType.Text) { // status card
            return (
                <div>
                    <p>Text card</p>
                    <p>{this.props.cardMedia.text}</p>
                    <CardButton buttonText="Like" isPressed={this.props.cardDetails.isLikedByMe}/>
                </div>
            );
        } else { //photo card
            return (
                <div>
                    <p>Image card</p>
                    <p> {this.props.cardMedia.text} </p>
                    <img src={this.props.cardMedia.imageUrl} />
                    <CardButton buttonText="Like" isPressed={this.props.cardDetails.isLikedByMe}/>
                </div>
            );
        }
    }
}





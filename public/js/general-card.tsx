/// <reference path="../../typings/index.d.ts" />
import * as React from "react";
import { CardLikeButton } from "./buttons";
import {CardActions} from './data/actions';

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
    cardId: string;
    cardMedia: CardMedia;
    cardDetails: CardDetails;
    createdAt: number;
}

export class Card extends React.Component<CardParams, {}> {

   // state: CardDetails;

    constructor(props: CardParams) {
        super(props);

        console.log("in card constructor");
        console.log("card type: " + props.cardType);

        // this.state = { // setting state from props in getInitialState is not good practice
        //     isLikedByMe: props.cardDetails.isLikedByMe,
        //     likeCount: props.cardDetails.likeCount
        // };

    }

    componentWillMount() {
        // this.setState({
        //     isLikedByMe: this.props.cardDetails.isLikedByMe,
        //     likeCount: this.props.cardDetails.likeCount
        // });
    }

    componentWillReceiveProps(nextProps: CardParams) {
        // this.setState({
        //     isLikedByMe: nextProps.cardDetails.isLikedByMe,
        //     likeCount: nextProps.cardDetails.likeCount
        // });
    }

    render() {
        console.log("RENDERING CARD "+this.props.cardId);
        // console.dir(this.props.cardDetails);
        // console.dir(this.props.cardMedia);
        // console.dir(this.props.cardType);

        if (this.props.cardType === CardType.Text) { // status card
            return (
                <div className="general-card">
                    <p>Text card.ID: {this.props.cardId}</p>
                    <p>{this.props.cardMedia.text}</p>
                    <CardLikeButton cardId={this.props.cardId} buttonText={this.props.cardDetails.isLikedByMe ? "Liked" : "Like"} isPressed={this.props.cardDetails.isLikedByMe}/>
                    <p>Like count: {this.props.cardDetails.likeCount}</p>
                </div>
            );
        } else { //photo card
            return (
                <div className="general-card">
                    <p>Image card.ID: {this.props.cardId}</p>
                    <p> {this.props.cardMedia.text} </p>
                    <img src={this.props.cardMedia.imageUrl} />
                    <br/>
                    <CardLikeButton cardId={this.props.cardId} buttonText={this.props.cardDetails.isLikedByMe ? "Liked" : "Like"} isPressed={this.props.cardDetails.isLikedByMe}/>
                    <p>Like count: {this.props.cardDetails.likeCount}</p>

                </div>
            );
        }
    }
}





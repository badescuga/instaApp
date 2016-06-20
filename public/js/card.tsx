/// <reference path="../../typings/index.d.ts" />
import * as React from "react";
import { CardLikeButton } from "./buttons";

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
}

export class Card extends React.Component<CardParams, CardDetails> {

    state: CardDetails;

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
        this.setState({
            isLikedByMe: this.props.cardDetails.isLikedByMe,
            likeCount: this.props.cardDetails.likeCount
        });
    }

    componentWillReceiveProps(nextProps: CardParams) {
        this.setState({
            isLikedByMe: nextProps.cardDetails.isLikedByMe,
            likeCount: nextProps.cardDetails.likeCount
        });
    }

    render() {
        console.log("RENDERING CARD");
        // console.dir(this.props.cardDetails);
        // console.dir(this.props.cardMedia);
        // console.dir(this.props.cardType);

        if (this.props.cardType === CardType.Text) { // status card
            return (
                <div className="general-card">
                    <p>Text card.ID: {this.props.cardId}</p>
                    <p>{this.props.cardMedia.text}</p>
                    <CardLikeButton onButClick={this.likeButtonClicked} buttonText={this.state.isLikedByMe ? "Liked" : "Like"} isPressed={this.state.isLikedByMe}/>
                    <p>Like count: {this.state.likeCount}</p>
                </div>
            );
        } else { //photo card
            return (
                <div className="general-card">
                    <p>Image card.ID: {this.props.cardId}</p>
                    <p> {this.props.cardMedia.text} </p>
                    <img src={this.props.cardMedia.imageUrl} />
                    <br/>
                    <CardLikeButton onButClick={this.likeButtonClicked} buttonText={this.state.isLikedByMe ? "Liked" : "Like"} isPressed={this.state.isLikedByMe}/>
                    <p>Like count: {this.state.likeCount}</p>

                </div>
            );
        }
    }

    likeButtonClicked = () => {
        console.log('in card => like button clicked!');
        var _isLikedByMe = this.state.isLikedByMe;
        var _likeCount = this.state.likeCount;

        if (_isLikedByMe) {
            _likeCount--;
        } else {
            _likeCount++;
        }
        _isLikedByMe = !_isLikedByMe;

        this.setState({
            isLikedByMe: _isLikedByMe,
            likeCount: _likeCount
        })
    }
}





/// <reference path="../../typings/index.d.ts" />
import * as React from "react";
import {CardActions} from './data/actions'


export interface CardButtonParams extends React.Props<any> {
    cardId: string;
    buttonText?: string;
    isPressed?: boolean;
}


export class CardLikeButton extends React.Component<CardButtonParams, {}> {

    constructor(props: CardButtonParams) {
        super(props);
    }

    componentWillMount() {
        console.log('comp will mount');
    }

    buttClicked = () => { //have to provide context to declared methods
        console.log(this.props.buttonText + ' button clicked! status: ' + this.props.isPressed);
        console.log('in card => like button clicked! card id:'+this.props.cardId);
        CardActions.toggleLikeButton(this.props.cardId);
    }

    render() {
        return (
            <button className="general-button" onClick={this.buttClicked}>{this.props.buttonText}</button>
        );
    }
}

//export default CardLikeButton;
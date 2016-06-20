/// <reference path="../../typings/index.d.ts" />
import * as React from "react";


export interface CardButtonParams extends React.Props<any> {
    buttonText?: string;
    isPressed?:boolean;
    onButClick:any;
}


export class CardLikeButton extends React.Component<CardButtonParams, {}> {

    constructor(props: CardButtonParams) {
        super(props);
    }

    componentWillMount() {
        console.log('comp will mount');
    }

    buttClicked = () => { //have to provide context to declared methods
        console.log(this.props.buttonText + ' button clicked! status: '+this.props.isPressed);
        this.props.onButClick();
    }

    render() {
        return (
            <button className="general-button" onClick={this.buttClicked}>{this.props.buttonText}</button>
        );
    }
}

//export default CardLikeButton;
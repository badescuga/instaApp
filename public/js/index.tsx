/// <reference path="../../typings/index.d.ts" />
import * as React from "react";


interface CardButtonParams extends React.Props<any> {
  buttonText: string;
}

class CardButton extends React.Component<CardButtonParams,{}> {
    render() {
        return (
           <div>
           <button>{this.props.buttonText}</button>
           </div>
        );
    }
};

//export default CardButton;
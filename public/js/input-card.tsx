/// <reference path="../../typings/index.d.ts" />
import * as React from "react";
import {CardActions} from './data/actions'

interface InputCardProps {

}

interface InputCardState {

}

export class InputCard extends React.Component<InputCardProps, InputCardState> {

    constructor(props: InputCardProps) {
        super(props);
    }

    submitPost = (evt) => {
        var text = evt.target.parentNode.getElementsByClassName('input-card-text')[0].value;
        var imageUrl = evt.target.parentNode.getElementsByClassName('input-card-image-url')[0].value;

        CardActions.addNewCardPost(text,imageUrl);
    }

    render() {
        return (
            <div className="general-card">
                <input className="input-card-text" placeholder="status update" type="text"></input><br/>
                <input className="input-card-image-url" placeholder="image url" type="text"></input><br/>

                <button onClick={this.submitPost}>Submit</button>
            </div>
        );
    }




}

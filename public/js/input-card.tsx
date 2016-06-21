/// <reference path="../../typings/index.d.ts" />
import * as React from "react";
import {CardActions} from './data/actions'

interface InputCardProps {

}

interface InputCardState {

}

var imgurId = "f38d9b7eb2e7c4c";

function EL(id) { return document.getElementById(id); } // Get el by ID helper function

function readFile(input, callback) {
    if (input.files && input.files[0]) {
        var FR = new FileReader();

        FR.onload = function (e) {
            // EL("img").src       = e.target.result;
            // EL("b64").innerHTML = e.target.result;
            callback(e.target.result);
        };
        FR.readAsDataURL(input.files[0]);
    }
}

export class InputCard extends React.Component<InputCardProps, InputCardState> {

    constructor(props: InputCardProps) {
        super(props);
    }

    // resetFields = (evt) => {
    //      evt.target.parentNode.getElementsByClassName('input-card-text')[0].value = '';
    // }

    submitPost = (evt) => {
        var text = evt.target.parentNode.getElementsByClassName('input-card-text')[0].value;
        //var imageUrl = evt.target.parentNode.getElementsByClassName('input-card-image-url')[0].value;
        var image = evt.target.parentNode.getElementsByClassName('input-card-image')[0];

        if (image.files.length > 0) { //add image card 
            console.log(" image card");
            readFile(image, (base64Data: string) => {
                base64Data = base64Data.substr(23);//removing "data:image/jpeg;base64," 
                $.ajax({
                    url: 'https://api.imgur.com/3/upload',
                    type: 'POST',
                    headers: {
                        Authorization: 'Client-ID ' + imgurId
                    },
                    data: {
                        type: 'image/jpeg;base64',
                        image: base64Data
                    },
                    dataType: 'json'
                }).success((response) => {
                    console.log('success: ' + JSON.stringify(response))
                    CardActions.addNewCardPost(text, response.data.link);
                 //   this.resetFields();

                }).error((error) => {
                    console.log('Could not reach api.imgur.com. Sorry :(' + JSON.stringify(error));

                });
            });
        } else { // add text card
            console.log(" text card");
            CardActions.addNewCardPost(text, null);
          //  this.resetFields();
        }
    }



    render() {
        return (
            <div className="general-card">
                <input className="input-card-text" placeholder="status update" type="text"></input><br/>
                <input id="fileupload" className="input-card-image" type="file" name="files[]"></input>

                <button type="submit" onClick={this.submitPost}>Submit</button>
            </div>
        );
    }




}

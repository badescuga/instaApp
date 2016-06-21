/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import {CardParams, Card} from './general-card';
import {InputCard} from './input-card';
import CardStore = require('./data/cardstore');

interface TimelineProps {

}

interface TimelineState {
    cards: CardParams[]
}

function getCardState(): TimelineState {
    return {
        cards: CardStore.getAll()
    };
}

export class Timeline extends React.Component<TimelineProps, TimelineState> {

    constructor(props: TimelineProps) {
        super(props);
        this.state = getCardState();
    }

    private _onChange = () => {
        this.setState(getCardState());
    };

    public componentDidMount: () => void =
    (): void => {
        CardStore.addChangeListener(this._onChange);
    };

    public componentWillUnmount: () => void =
    (): void => {
        CardStore.removeChangeListener(this._onChange);
    };

    render() {
        return (
            <div>
            <InputCard />
                {
                    this.state.cards.map((item) => {
                        return (
                            <Card key={item.cardId} cardId={item.cardId} cardType={item.cardType} cardDetails={item.cardDetails} cardMedia={item.cardMedia} createdAt={item.createdAt}/>
                        );
                    })
                }
            </div>
        );
    }
}
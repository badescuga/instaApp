/// <reference path="../../typings/index.d.ts" />

interface CardButtonParams extends React.Props<any> {
  buttonText: string;
}

class CardButton extends Component<CardButtonParams,{}> {
    render() {
        return (
           <div>
           <button>{this.props.buttonText}</button>
           </div>
        );
    }
};

export default CardButton;
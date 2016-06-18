"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CardButton = (function (_super) {
    __extends(CardButton, _super);
    function CardButton() {
        _super.apply(this, arguments);
    }
    CardButton.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("button", null, this.props.buttonText)));
    };
    return CardButton;
}(Component));
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CardButton;
//# sourceMappingURL=index.js.map
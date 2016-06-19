/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import { CardButton } from "./buttons";

ReactDOM.render(
    <CardButton buttonText="Like" isPressed={false} />,
    document.getElementById("main")
);

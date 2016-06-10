/// <reference path="../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Page } from "./views/page"




ReactDOM.render(
    <Page title="Testing with Boludo"
        message="This is a page." />,
    document.getElementById("rootApp")
);

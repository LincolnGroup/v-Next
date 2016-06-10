/// <reference path="../../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";
export interface IPageProps {
    title?:string;
    message?:string;
}
export class Page extends React.Component<IPageProps, {}> {
    render() {
       return (<div>
<h1> {this.props.title} </h1>
        <p>{this.props.message}!</p>
        </div>)        ;
    }
}
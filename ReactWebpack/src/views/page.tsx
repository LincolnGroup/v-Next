/// <reference path="../../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";
import {ViewContext} from "../core/viewContext";
import {RaisedButton, AppBar, Drawer, MenuItem, ToolbarGroup} from 'material-ui';

export interface IPageState {
    open?: boolean;
    loaded?: boolean;
    visible?: boolean;
}
export interface IPageProps {
    title?: string;
    message?: string;
}

export class Page extends React.Component<IPageProps, IPageState> {
    childControls: any[];
    constructor(props: IPageProps) {
        super(props);
          this.state = { open: false };
        this.childControls = [];
    }
     public handleToggle(): any {
        this.setState({ open: !this.state.open });
    }
    createChildControls() {
        return (
            <div>
                <AppBar title="Copley Systems"
                    onTitleTouchTap={() => console.log(this) }
                    onLeftIconButtonTouchTap={() => this.setState({ open: !this.state.open }) }/>
                    
                   <RaisedButton onClick={() => this.setState({ open: !this.state.open }) }
                    label="Toggle Drawer"
                    onTouchTap={this.handleToggle}/>  
                <Drawer open={this.state.open} docked={false}>
                    <div >test</div>
                    <MenuItem onClick={() => this.setState({ open: !this.state.open }) }>Menu Item</MenuItem>
                    <MenuItem onClick={() => this.setState({ open: !this.state.open }) }>Menu Item 2</MenuItem>
                </Drawer>
            </div>)
    }
    public render(): React.ReactElement<{}> {
        return (ViewContext.View(
            this.createChildControls()));
    }
}
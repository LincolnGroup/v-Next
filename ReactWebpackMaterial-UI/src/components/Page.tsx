
/// <reference path="../../typings/tsd.d.ts"/>  
// Basic template for Base View Component.   

// Import react
import * as React from 'react';
import { connect} from 'react-redux';
import { ViewContext} from "../core/ViewContext";
import { TabsView} from "./Tabs";

/*
   Data   
*/
import {TodoItem} from '../model/TodoItem';
import {TodoState} from '../reducers/todos';
import {TodoAction, removeTodoAction, addTodoAction} from '../actions/todoActions'
/*
 */
export interface IPageState {
    open: boolean;
}
export interface IPageProps {
    todos?: string[];
    title: string;
}
/*
   Material-Ui import   
*/
import {RaisedButton, AppBar, Drawer, MenuItem, } from 'material-ui';
import { DialogView } from "./DialogView";
import ListExampleSimple from "./List";

export class Page extends React.Component<IPageProps, IPageState> {
    constructor(props: IPageProps) {
        super(props);
        this.state = { open: false };
        this.childControls = [];
    }
    public handleToggle(): any {
        this.setState({ open: !this.state.open });
    }
    createChildControls() {
        let children = this.childControls.map(function (child) {
            return (child);
        });
        return (
            <div>
                <AppBar title="Copley Systems"
                    onTitleTouchTap={() => console.log(this) }
                    onLeftIconButtonTouchTap={() => this.setState({ open: !this.state.open }) }/>

                <RaisedButton onClick={() => this.setState({ open: !this.state.open }) }
                    label="Toggle Drawer"
                    onTouchTap={this.handleToggle}/>
                <Drawer open={this.state.open} docked={false}>
                    <MenuItem onClick={() => this.setState({ open: !this.state.open }) }>Menu Item</MenuItem>
                    <MenuItem onClick={() => this.setState({ open: !this.state.open }) }>Menu Item 2</MenuItem>
                </Drawer>
                <div>
                    {children}
                </div>
                <div>   <DialogView ></DialogView></div>
                <div>
                    <ListExampleSimple /></div>
            </div>
        )
    }
    childControls: any[];
    // Needed to render view, always.    
    public render(): React.ReactElement<{}> {
        return (ViewContext.View(
            this.createChildControls()));
    }
}

export class CustomPage extends Page {
    constructor(props: IPageProps) {
        super(props);
        this.activate();
    }
    activate() {
        const self = this;
        self.childControls.forEach(()=>{

        })
        self.childControls.push(
            <h1 >
                These are page items.</h1>
        );
        self.childControls.push(<TabsView  />);
        self.childControls.push(<div >4</div>);
        self.childControls.push(<div >5</div>);
    }
}
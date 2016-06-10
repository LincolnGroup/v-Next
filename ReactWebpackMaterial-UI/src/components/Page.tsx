
/// <reference path="../../typings/tsd.d.ts"/>  
// Basic template for Base View Component.   

// Import react
import * as React from 'react';
import { connect} from 'react-redux';
/*
   Data   
*/
import {TodoItem} from '../model/TodoItem';
import {TodoState} from '../reducers/todos';
import {TodoAction, removeTodoAction, addTodoAction} from '../actions/todoActions'
/*
 */
export interface IPageState { }
export interface IPageProps {
    todos?: string[];
    dispatch: string;
}
/*
   Material-Ui import   
*/
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {RaisedButton, AppBar} from 'material-ui';
//const theme = Styles.ThemeManager.getMuiTheme(Styles.LightRawTheme);
const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});
export class Page extends React.Component<IPageProps, IPageState> {
    constructor(props: IPageProps) {
        super(props);
    }
    render() {
        return (
            <MuiThemeProvider  muiTheme={muiTheme} >
                <div>
                    <AppBar title="Coply Systems"/>
                    <RaisedButton label="Test" />
                </div>
            </MuiThemeProvider>
            );
    }
}
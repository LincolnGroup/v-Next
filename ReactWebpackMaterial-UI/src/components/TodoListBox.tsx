/// <reference path="../../typings/tsd.d.ts"/>
/* Project: c:\Users\victo\Source\Repos\typescript-webpack-react-todolist
 * File: src\components\TodoListBox.tsx
 * Date: $(currentDate)
 */
import * as React from 'react';
import {connect} from 'react-redux';
import {Paper} from 'material-ui';

import { ViewContext} from "../core/ViewContext";

import {Table, TableRow, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRowColumn, RaisedButton, TextField, IconButton} from 'material-ui';

import {TodoState} from '../reducers/todos';
import {TodoItem} from '../model/TodoItem';

import {TodoAction, removeTodoAction, addTodoAction} from '../actions/todoActions'

export interface ITodoListBoxState { }
export interface ITodoListBoxProps extends React.Props<TodoListBox> {
    todos?: TodoItem[];
    dispatch?: (action: TodoAction) => any
}

import {Page } from "./Page";


@connect((state: TodoState) => (state.todos))
export class TodoListBox extends React.Component<ITodoListBoxProps, ITodoListBoxState> {
    constructor() {
        super();
    }
    onRowSelection(selectedRows: number[] | string) {
        var todos: TodoItem[];
        if (selectedRows === 'all') {
            todos = this.props.todos;
        } else {
            todos = (selectedRows as number[]).map(number => this.props.todos[number]);
        }
        // todos.forEach(item=>this.props.dispatch(removeTodoAction(item)));
    }
    onAddTodoClick() {
        this.props.dispatch(addTodoAction((this.refs['todoInput'] as TextField).getValue()));
    }

    createChildControls(){
         return (
             <div>
                <h1> React render only allows one child container </h1>
                <Page title="Henry" />
            </div>)
    }    
    render() {        
        return (ViewContext.View(
            this.createChildControls()));
    }
    
    private getTodoRows() {
        return this.props.todos.map((todo, index) => {
            return <TableRow key={todo.id}>
                <TableRowColumn>{todo.id}</TableRowColumn>
                <TableRowColumn>{todo.todo}</TableRowColumn>
            </TableRow>;
        });
    }
}


/// <reference path="../../typings/index.d.ts" />
import * as React from 'react';
import {deepOrange500, blue900, indigo400, blue100} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
export class ViewContext {
    static muiTheme = getMuiTheme({
        palette: {
            canvasColor:blue100,
            accent1Color: deepOrange500,
            accent2Color: blue900,
            borderColor: indigo400
        },
    });
    static View(control: any) {
        return (
            <MuiThemeProvider muiTheme={ViewContext.muiTheme} >
                <div>
                    {control}
                </div>
            </MuiThemeProvider>);
    }
}
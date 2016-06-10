import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Page} from './components/Page';
import {configureStore} from './store/store';
import {Provider} from 'react-redux';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <div className="demo">
            <div className="demo-row">
                <div className="center-padding"></div>
                <div className="center">
                    <Page dispatch="test"></Page>
                </div>
                <div className="center-padding"></div>
            </div>
        </div>
    </Provider>,
    document.getElementById('todoList')
);

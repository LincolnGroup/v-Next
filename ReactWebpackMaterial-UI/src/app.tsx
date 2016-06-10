import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {CustomPage} from './components/Page';
import {TodoListBox} from './components/TodoListBox';
import {configureStore} from './store/store';
import {Provider} from 'react-redux';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>        
      <CustomPage  title="Copley Systems"></CustomPage>   
                   
    </Provider>,
    document.getElementById('todoList')
);

   // <div className="center-padding">
                //  <TodoListBox   />
                // </div>     

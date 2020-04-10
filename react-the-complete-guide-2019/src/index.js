import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';

import App from './Udemy/App';
import TodoApp from './Todo/TodoApp';
import Page404 from './components/Page404/Page404';

import './index.css';

import * as serviceWorker from './serviceWorker';

const RootRouting = (
  <BrowserRouter basename="/learning-react">
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/todo-app" component={TodoApp} />
      <Route path="/404" component={Page404} />
      <Redirect to="/404" />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(RootRouting, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

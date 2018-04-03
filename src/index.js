import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from './features/app/app.container';
import { createAppLoadAction } from './features/app/app.actions';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers';
import { epicMiddleware } from './epics';
import './index.css';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(epicMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);

// You can also use the component did mount hook to make this ajax call in the App component.
// But since this also only runs once, I figured it was easier to fire it here.
store.dispatch(createAppLoadAction());

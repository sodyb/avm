import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './components/Hello.js';
import './style.css';

// import default css
import './var.css'

// import redux
import { createStore } from 'redux';
import { Provider } from 'react-redux'

//import reducers
import { noteReducer } from './reducers/noteReducer.js'

// make store
const store = createStore(noteReducer,
{root:'C'},
//for redux devtools
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// ReactDom render
render(<Provider store={store}>
  <Hello />
  </Provider>,
  document.getElementById('root')
  );

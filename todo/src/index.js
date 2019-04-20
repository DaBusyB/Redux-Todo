import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import ToDoList from './components/ToDoList'

import './index.css';

const reducer = () => {
  return {
    todoItems: [
      { id: 1234234, task: 'Mow the lawn', completed: false }
    ]
  }
}

const store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ToDoList />
        </header>
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

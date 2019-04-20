import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import ToDoList from './components/ToDoList'

import './index.css';

// const reducer = () => {
//   return {
//     todoItems: [
//       { id: 1234234, task: 'Mow the lawn', completed: false, edit: false },
//       { id: 1334678, task: 'Take out the trash', completed: false, edit: false },

//     ]
//   }
// }

const store = createStore(rootReducer)

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoList />
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

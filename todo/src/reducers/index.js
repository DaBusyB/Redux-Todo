import { ADD_TASK } from '../actions'

const initialState = {
    todoItems: [
        { id: 1234234, task: 'Mow the lawn', completed: false},
        { id: 1334678, task: 'Take out the trash', completed: false},
  
    ]
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TASK:
            const newTask = {
                id: Date.now(),
                task: action.payload,
                completed: false
            }
            return {
                ...state,
                todoItems: [...state.todoItems, newTask]
            }

        default: 
            return state
    }
}

export default reducer
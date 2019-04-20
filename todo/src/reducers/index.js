import { ADD_TASK, TOGGLE_COMPLETE } from '../actions'

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
        case TOGGLE_COMPLETE:
            return {
                todoItems: state.todoItems.map(item => {
                    if(item.id === action.payload) {
                        return {
                            ...item,
                            completed: !item.completed
                        }
                    }
                    return item
                })
            }

        default: 
            return state
    }
}

export default reducer
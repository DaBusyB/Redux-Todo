export const ADD_TASK = 'ADD_TASK'
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE'

export const addTaskAction = task => {
    console.log(task)
    return {
        type: ADD_TASK,
        payload: task
    }
}

export const toggleCompleteAction = id => {
    console.log(id)
    return {
        type: TOGGLE_COMPLETE,
        payload: id
    }
}
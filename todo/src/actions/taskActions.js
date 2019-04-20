export const ADD_TASK = 'ADD_TASK'

export const addTaskAction = task => {
    console.log(task)
    return {
        type: ADD_TASK,
        payload: task
    }
}
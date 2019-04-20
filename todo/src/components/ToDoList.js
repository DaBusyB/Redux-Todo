import React from 'react'
import { connect } from 'react-redux'
import { addTaskAction, toggleCompleteAction } from '../actions'


class TodoList extends React.Component {
    state = {
        newTask: ''
    }

    handleChanges = e => {
        this.setState({ [e.target.name] : e.target.value })
    }

    addNewTask = e => {
        e.preventDefault()
        this.props.addTaskAction(this.state.newTask)
        this.setState({ newTask: "" })
    }

    toggleComplete = id => {
        this.props.toggleCompleteAction(id)
    }

    render() {
        return (
            <>
                <div className='todo-container'> 
                    <h1> Todo List </h1>
                    {this.props.todoItemsProp.map(item => (
                        <h4 key={item.id}>
                            {item.task}
                        
                            {
                                item.completed ? 
                                <i className="far fa-grin" onClick={() => this.toggleComplete(item.id)}/> 
                                : 
                                <i className="far fa-angry" onClick={() => this.toggleComplete(item.id)}/>
                            }
                        </h4>
                    ))} 
                </div>

                <input
                    type='text'
                    name='newTask'
                    value={this.state.newTask}
                    onChange={this.handleChanges}
                    placeholder='Add new task'
                />

                <button onClick={this.addNewTask}>Add Task</button>
            </>    
        )  
    }
    
}

const mapStateToProps = state => ({
    todoItemsProp: state.todoItems 
})

export default connect (
    mapStateToProps, 
    { addTaskAction, toggleCompleteAction }
)(TodoList)
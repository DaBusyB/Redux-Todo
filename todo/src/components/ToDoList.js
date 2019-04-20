import React from 'react'
import { connect } from 'react-redux'

class TodoList extends React.Component {

    render() {
        return (
            <div className='todo-container'> 
                {this.props.todoItemsProp.map(item => (
                    <h4 key={item.id}>
                        {item.task}
                    </h4>
                ))} 
            </div>
        )  
    }
    
}

const mapStateToProps = state => ({
    todoItemsProp: state.todoItems 
})

export default connect (
    mapStateToProps, 
    {}
)
(TodoList)
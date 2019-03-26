import React from 'react';
import TodoItem from './TodoItem';
import './style.css'

function App(){
    return (
        <div className='todo-list'>
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}

export default App;
import React from 'react'
import './todos.css'

const Todos = ({todos,handleDelete})=>{

    const todosUI = todos.length?(
        todos.map( todo => {
           return(
               <div key={todo.id} className='todo'>
                <span onClick={()=>{handleDelete(todo.id)}}>{todo.content}</span>
               </div>
           )
        })
    ):(
        <p>no more left!!! Add a Todo</p>
    )


    return(
        <div>
            {todosUI}
        </div>
    )
}

export default Todos
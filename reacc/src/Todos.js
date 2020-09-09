import React from 'react'

export default function Todos (props) {
  console.log('props.todos: ', props.todos)
  return (
    <ul>
      {props.todos.map((todo, i) => {
        console.log('Todo map: ', todo)
        return <Todo key={i} todo={todo} />
      })}
    </ul>
  )
}

function Todo (props) {
  console.log('props.todo : ', props.todo)
  return (
    // fuck this line vv
    <li>{props.todo.todo}</li>
    // fuck this line ^^
  )
}

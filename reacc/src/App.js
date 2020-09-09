import React from 'react'
import Todos from './Todos'
import NewTodo from './NewTodo'
import './App.css'

/* globals fetch */

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  componentDidMount () {
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({ todos: data.todos }, () => console.log(this.state))
      })
  }

  handleAdd = todo => {
    fetch('/new-todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ todo })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        // this.setState({ todos: data.todos }, () => console.log(this.state))
      })
  }

  render () {
    return (
      <div>
        <NewTodo onSubmit={this.handleAdd} />
        <Todos todos={this.state.todos} />
      </div>
    )
  }
}

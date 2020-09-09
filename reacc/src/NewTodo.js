import React from 'react'

export default class NewTodo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todo: ''
    }
  }

  handleChange = evt => {
    this.setState({ todo: evt.target.value })
  }

  handleSubmit = evt => {
    this.props.onSubmit(this.state.todo)
    evt.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} />
        <button>Add</button>
      </form>
    )
  }
}
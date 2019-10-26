import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {
getStyle = () => {
// ternary operator below. Could also be if statements
  return {
    background: '#f4f4f4',
    padding: '10px',
    borderBottom: '1px #ccc dotted',
    textDecoration: this.props.todo.completed ? 'line-through' : 'none'
  }
}

// markComplete = (element) => {
//   console.log(this.props)
// }

  render() {
    const { id, title } = this.props.todo;
    return (
      // example of inline styling:
      // <div style={{ backgroundColor: 'pink'}}>
      // you could also create a variable and pass that in (with just one set of curly brackets)
      // The following way passes in a method:
      <div style={this.getStyle()}>
        <p>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}      
        { title }
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
        </p>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  background: '#f12345', //#ff0000
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem

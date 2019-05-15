import React, { Component } from "react";
import TodoDisplay from "./TodoDisplay";
import AddToDo from "./AddToDo";
import { connect } from "react-redux";
import { getTodos } from "../../redux/reducer";
import "../../App.css";

class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };
  }

  handleInput = value => {
    this.setState({
      title: value
    });
  };

  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    let list = this.props.todos.map(item => {
      return (
        <TodoDisplay
          key={item.id}
          id={item.id}
          title={item.title}
          completed={item.completed}
          desc={item.description}
          handleEdit={this.handleEdit}
          handleInput={this.handleInput}
        />
      );
    });

    return (
      <div className="cont">
        <div className="inner-cont">
          <AddToDo />
          {list}
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    todos: reduxState.todos
  };
}

export default connect(
  mapStateToProps,
  { getTodos }
)(ToDoList);

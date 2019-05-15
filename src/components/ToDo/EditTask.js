import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { editToDo } from "../../redux/reducer";
import "../../App.css";

class EditTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      desc: ""
    };
  }

  changeHandler = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className="edit-window">
        <Link to="/">
          <div>Back to TODO?</div>
        </Link>
        <input
          name="title"
          placeholder="Change the title..."
          onChange={e => {
            this.changeHandler(e.target.name, e.target.value);
          }}
        />
        <input
          name="desc"
          placeholder="Add/Edit Description..."
          onChange={e => {
            this.changeHandler(e.target.name, e.target.value);
          }}
        />
        <Link to="/">
          <div
            onClick={() =>
              this.props.editToDo(
                this.props.id,
                this.state.title,
                this.state.desc
              )
            }
            className="cont-button"
          >
            Continue?
          </div>
        </Link>
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
  { editToDo }
)(EditTask);

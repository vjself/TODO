import React, { Component } from "react";
import { deleteToDo, markComplete, editToDo } from "../../redux/reducer";
import { connect } from "react-redux";
import "../../App.css";
import { Link } from "react-router-dom";

class TodoDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleEdit: "",
      editBox: false
    };
  }

  handleEdit = value => {
    this.setState({
      titleEdit: value
    });
  };

  editModal = () => {
    this.setState({
      editBox: !this.state.editBox
    });
  };

  render() {
    const bg =
      "https://cdn3.iconfinder.com/data/icons/simplius-pack/512/pencil_and_paper-512.png";
    const background =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMyDj_DkAcWYpN2pmQGhotoF2q25AO7LybLedegH1qma-bckJC";
    return (
      <div className="todo-instance">
        {this.state.editBox === false ? (
          <div
            tooltip="Click to edit..."
            tooltip-position="top"
            className="title"
            onClick={this.editModal}
          >
            {this.props.title}
          </div>
        ) : (
          <div className="edit-button">
            <input
              id="edit-input"
              type="text"
              placeholder="Edit here..."
              onChange={e => this.handleEdit(e.target.value)}
            />
            <button onClick={this.editModal}>Cancel</button>
            <button
              onClick={() => {
                this.props.editToDo(this.props.id, this.state.titleEdit);
              }}
            >
              Confirm
            </button>
          </div>
        )}
        <div className="e-d-butd">
          <Link to="/edit-task">
            <button
              style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                width: "20px",
                height: "20px",
                borderRadius: "25px",
                marginRight: "10px",
                boxShadow: "2px 2px 3px grey"
              }}
            />
          </Link>
          <button
            style={{ borderRadius: "25px" }}
            className={
              this.props.completed === false ? "completed-f" : "completed-t"
            }
            onClick={() => this.props.markComplete(this.props.id)}
          >
            Complete
          </button>
          <button
            id="delete-button"
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              width: "20px",
              height: "20px",
              borderRadius: "25px"
            }}
            onClick={() => this.props.deleteToDo(this.props.id)}
          />
          <p>{this.props.description}</p>
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
  { deleteToDo, markComplete, editToDo }
)(TodoDisplay);

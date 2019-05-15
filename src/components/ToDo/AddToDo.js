import React, { Component } from "react";
import { addToDo } from "../../redux/reducer";
import { connect } from "react-redux";

class AddToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  handleInput = value => {
    this.setState({
      input: value
    });
  };

  render() {
    const backgroundAddy =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFViUg_JVLAH6ovip7TjHeZRW7ELSoBDfq1J22_cl_JtVXM9tdqA";
    return (
      <div className="add-box">
        <input
          id="add-id"
          type="text"
          placeholder="Add a task..."
          value={this.state.input}
          onChange={e => this.handleInput(e.target.value)}
        />
        <button
          style={{
            backgroundImage: `url(${backgroundAddy})`,
            width: "20px",
            height: "20px",
            backgroundSize: "cover",
            borderRadius: "25px",
            marginLeft: "10px",
            boxShadow: "2px 2px 3px grey"
          }}
          onClick={() => this.props.addToDo(this.state.input)}
        />
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
  { addToDo }
)(AddToDo);

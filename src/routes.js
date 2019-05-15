import React from "react";
import { Switch, Route } from "react-router-dom";
import ToDoList from "./components/ToDo/ToDoList";
import EditTask from "./components/ToDo/EditTask";

export default (
  <Switch>
    <Route component={EditTask} path="/edit-task" />
    <Route component={ToDoList} exact path="/" />
  </Switch>
);

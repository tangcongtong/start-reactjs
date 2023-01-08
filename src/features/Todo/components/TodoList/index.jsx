import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles.scss";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};
TodoList.defaultPros = {
  todoList: [],
  onTodoClick: null,
};
function TodoList({ todoList,onTodoClick }) {
  const handleTodoClick =(todo, idx)=> {
    if (!onTodoClick) {
      return;
    }
    onTodoClick(todo, idx);
  }
  return (
    <ul className="todo-list">
      {todoList.map((e, idx) => (
        <li
          key={e.id}
          className={classNames({
            "todo-Item": true,
            completed: e.status === "completed",
          })}
          onClick={()=> handleTodoClick(e,idx)}
        >
          {" "}
          {e.name}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

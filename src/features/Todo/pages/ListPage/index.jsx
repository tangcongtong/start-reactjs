import { Routes, Redirect, Route, Link, NavLink, Navigate } from "react-router-dom";
import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "../../components/TodoList";

ListPage.propTypes = {};

function ListPage(props) {
  const initList = [
    {
      id: 1,
      name: "A",
      status: "new",
    },
    {
      id: 2,
      name: "B",
      status: "completed",
    },
    {
      id: 3,
      name: "C",
      status: "new",
    },
  ];
  const [List, setTodoList] = useState(initList);
  const [filteredStatus, setfilteredStatus] = useState("all");

  const handleTodoList = (todo, idx) => {
    console.log(todo, idx);

    const newTodoList = [...List];
    const newTodo = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };
    newTodoList[idx] = newTodo;
    setTodoList(newTodoList);
  };
  const handleShowAllClick = () => {
    setfilteredStatus("all");
  };
  const handleShowCompleteClick = () => {
    setfilteredStatus("completed");
  };
  const handleShowNewClick = () => {
    setfilteredStatus("new");
  };
  const renderedTodoList = List.filter((x) => filteredStatus === "all"|| filteredStatus===x.status);
  console.log('====================================');
  console.log(renderedTodoList);
  console.log('====================================');
  return (
    <div>
      <h3>To do list</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoList}></TodoList>

      <div>
        <button onClick={handleShowAllClick}>Show ALL</button>
        <button onClick={handleShowCompleteClick}>Show completed</button>
        <button onClick={handleShowNewClick}>Show new</button>
      </div>
    </div>
  );
}

export default ListPage;

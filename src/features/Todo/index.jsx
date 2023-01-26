import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Routes,
  Redirect,
  Route,
  Link,
  NavLink,
  Navigate,
} from "react-router-dom";
import TodoList from "./components/TodoList";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";

TodoFeature.propTypes = {};

function TodoFeature(props) {

  return (
    <div>
      <Routes>
        <Route exact  path="/*" element={<ListPage />} ></Route>
        <Route exact  path="/:id" element={<DetailPage/>}></Route>
      </Routes>
    </div>
  );
}

export default TodoFeature;

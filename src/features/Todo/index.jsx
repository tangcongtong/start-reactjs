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
        <Route  path="/:id" element={<DetailPage  animate={true}/>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default TodoFeature;

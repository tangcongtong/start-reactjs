import logo from "./logo.svg";
import { Routes, Redirect, Route, Link, NavLink, Navigate } from "react-router-dom";
import "./App.css";
import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Tăng Công Tổng</p>
      </header> */}
      <h1>Homepage</h1>
      <h5>Header</h5>
      <p>
        <Link to="/todos">Todos</Link>
      </p>
      <p>
        <Link to="/albums">Albums</Link>
      </p>
      <p>
        <NavLink
          to="/todos"
        
        >
          Todos
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums"   >Albums</NavLink>
      </p>
        {/* <Navigate from="/home" to="/" /> */}
      <Routes>

        <Route path="/" element={<TodoFeature />}></Route>
        <Route  path="/todos/*" element={<TodoFeature />}></Route>
        <Route path="/albums" element={<AlbumFeature />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      Footer
    </div>
  );
}

export default App;

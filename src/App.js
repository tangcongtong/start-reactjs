import logo from "./logo.svg";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";

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
          <NavLink to="/todos"   className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            Todos
          </NavLink>
        </p>
        <p>
          <NavLink to="/albums">Albums</NavLink>
        </p>
      <Routes>

        <Route path="/todos" element={<TodoFeature />}></Route>
        <Route path="/albums" element={<AlbumFeature />}></Route>
      </Routes>
      Footer
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
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
      Homepage
      <Routes>
        <Route path="/todos" element={<TodoFeature />}></Route>
        <Route path="/aaa" element={<AlbumFeature />}></Route>
      </Routes>
      Footer
    </div>
  );
}

export default App;

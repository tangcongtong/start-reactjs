import logo from "./logo.svg";
import "./App.css";
import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Tăng Công Tổng</p>
      </header>
      <AlbumFeature>
      </AlbumFeature>
      <TodoFeature></TodoFeature>
    </div>
  );
}

export default App;

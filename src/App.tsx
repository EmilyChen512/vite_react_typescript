import "./App.css";
import { Blog } from './components/blog'

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>Blog</li>
        </ul>
      </div>
      <Blog />
    </div>
  );
}

export default App;

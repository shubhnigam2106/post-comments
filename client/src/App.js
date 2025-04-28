import './App.css';
import PostCreate from './Components/postCreate';
import PostList from './Components/postList';
function App() {
  return (
    <div className="App">
      <h1>
        Post App</h1>
        <PostCreate/>
        <hr/>
        <PostList/>
      
    </div>
  );
}

export default App;

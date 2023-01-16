import './App.css';
import { Route,Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import CreatePost from './components/CreatePost';
import AllPosts from './components/AllPosts';

function App() {
  return (
    <div className="App">
      <h1>Social Media APP</h1>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/posts" element={<AllPosts />} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './Dashboard';
import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/warehouse' element={<Dashboard />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>

    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import './App.css';
import ShowPirates from './components/ShowPirates';
import NewPirate from './components/NewPirate';
import OnePirate from './components/OnePirate';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/pirates' element={< ShowPirates />} />
        <Route path='/pirate/new' element={< NewPirate />} />
        <Route path='/pirate/:id' element={<OnePirate />} />
      </Routes>
    </div>
  );
}

export default App;

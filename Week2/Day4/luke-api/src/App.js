import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom"
import { useState } from 'react';
import Main from './components/Main';
import People from './components/People';
import Planets from './components/Planets';

function App() {
  const [id, setID] = useState(1)
  const [type, setType] = useState("people")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(type, id)
    navigate(`/${type}/${id}`)
  }
  return (
    <fieldset onSubmit={handleSubmit}>
      <form>
        <select name="type" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="people">people</option>
          <option value="planets">planets</option>
        </select>
        <input type='number' value={id} onChange={(e) => setID(e.target.value)}></input>
        <button>Search</button>
      </form>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/people/:id' element={<People id={id} />} />
        <Route path='/planets/:id' element={<Planets id={id} />} />
      </Routes>
    </fieldset >
  );
}

export default App;

import './App.css';
import { Routes, Route } from 'react-router-dom';
import ShowAuthors from './components/ShowAuthors';
import Form from './components/Form';
import Edit from './components/Edit';

function App() {


  return (
    <div className="App">
      <h1>Favorite Authors</h1>

      <Routes>
        <Route path='/authors' element={<ShowAuthors />} />
        <Route path='/author/create' element={<Form />} />
        <Route path='/authors/:id' element={<Edit />} />
      </Routes>

    </div>
  );
}

export default App;

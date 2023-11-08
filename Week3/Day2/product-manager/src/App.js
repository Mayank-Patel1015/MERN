import { Routes, Route } from 'react-router-dom';
import './App.css';
import Products from './components/Products';
import ViewProduct from './components/ViewProduct';
import Edit from './components/Edit';

function App() {
  return (
    <fieldset>
      <legend>App</legend>
      <h1>Product Manager</h1>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path='/products/:id' element={<ViewProduct />} />
        <Route path='/:id/edit' element={<Edit />} />
      </Routes>
    </fieldset>
  );
}

export default App;

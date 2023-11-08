import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Form from './Form';


const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then(res => {
        console.log(res.data)
        setProducts(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const deleteOne = (deleteId) => {
    axios.delete("http://localhost:8000/api/products/" + deleteId)
      .then(res => {
        console.log("OK DELETED", res.data);
        const filteredProducts = products.filter((eachProduct) => {
          return eachProduct._id !== deleteId;
        });
        setProducts(filteredProducts);
      })
      .catch(err => console.log(err));
  };

  return (
    <fieldset>
      <Form />
      <div>Products</div>
      {
        products.map((product) => (
          <div key={product._id}>
            <Link to={`/products/${product._id}`}>
              <h3>{product.title}</h3>
            </Link>
            <button onClick={() => deleteOne(product._id)}> delete </button>
          </div>
        ))
      }

    </fieldset>
  )
}

export default Products
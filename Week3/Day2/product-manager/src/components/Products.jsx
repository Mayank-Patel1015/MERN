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
          </div>
        ))
      }

    </fieldset>
  )
}

export default Products
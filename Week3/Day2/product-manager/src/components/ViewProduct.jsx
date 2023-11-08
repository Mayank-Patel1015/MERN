import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ViewProduct = () => {
  const Navigate = useNavigate()
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:8000/api/products/" + id)
      .then(res => {
        console.log(res.data)
        setProduct(res.data)
      })
      .catch(err => console.log(err))

  }, [])

  const deleteOne = (deleteId) => {
    axios.delete("http://localhost:8000/api/products/" + deleteId)
    Navigate('/products')
  };

  return (
    <fieldset>
      <legend>a product</legend>
      <h1>product</h1>
      {
        product === null ? "loading" : (
          <>
            <h3>{product.title}</h3>
            <h3>{product.price}</h3>
            <h3>{product.description}</h3>
            <Link to={`/${product._id}/edit`}>
              <button>edit</button>
            </Link>
            <button onClick={() => deleteOne(product._id)}> delete </button>
          </>
        )
      }
    </fieldset>
  )
}

export default ViewProduct
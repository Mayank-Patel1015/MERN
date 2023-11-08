import React from 'react'
import { json, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ViewProduct = () => {
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
          </>
        )
      }
    </fieldset>
  )
}

export default ViewProduct
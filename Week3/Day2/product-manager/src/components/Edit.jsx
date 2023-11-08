import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const Edit = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState("")
  const [product, setProduct] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:8000/api/products/" + id)
      .then(res => {
        console.log(res.data);
        setProduct(res.data)
      })
      .catch(err => console.log(err));
  }, [id]);

  const updateProduct = (e) => {
    e.preventDefault();
    const tempObjectToSendToDB = {
      title,
      price,
      description
    };
    axios.patch("http://localhost:8000/api/products/" + id, tempObjectToSendToDB)
      .then(res => {
        navigate("/products");
      })
  };

  return (
    <fieldset>
      <legend>Edit.jsx</legend>
      <h3>Edit</h3>
      {
        product === null ? "loading..." : (
          <>
            <form onSubmit={updateProduct}>
              <label for="title">Title: </label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input><br />
              <label for="price">Price: </label>
              <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}></input><br />
              <label for="description">Description: </label>
              <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input><br />
              <button>Update</button>
            </form>
          </>
        )
      }
    </fieldset>
  )
}

export default Edit
import React from 'react'
import './Form.css';
import { useState } from 'react';
import axios from 'axios'

const Form = (props) => {

  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState("")

  const createHandler = (e) => {
    e.preventDefault()
    console.log("create" + title + price + description)
    axios.post("http://localhost:8000/api/products", { title, price, description })
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }
  return (
    <fieldset>
      <div className='form'>
        <form onSubmit={createHandler}>
          <label for="title">Title: </label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input><br />
          <label for="price">Price: </label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}></input><br />
          <label for="description">Description: </label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input><br />
          <button>Create</button>
        </form>
      </div>
    </fieldset>
  );
}

export default Form
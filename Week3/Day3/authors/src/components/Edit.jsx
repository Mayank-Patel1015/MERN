import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const Edit = (props) => {

  const Navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState("")
  const [author, setAuthor] = useState()

  useEffect(() => {
    axios.get("http://localhost:8000/api/author/" + id)
      .then(res => {
        console.log(res.data);
        setName(res.data.name);
      })
      .catch(err => console.log(err));
  }, [id]);

  const editAuthor = (e) => {
    e.preventDefault()
    const tempAuthor = {
      name
    }
    console.log(name)
    axios.patch("http://localhost:8000/api/author/" + id, tempAuthor)
      .then(res => {
        setAuthor(res.data)
        Navigate('/authors')
      })
      .catch(err => console.log(err))

  }


  return (
    <div>Edit
      <form>
        <label>Name:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <button onClick={() => Navigate('/authors')}>cancel</button>
        <button onClick={editAuthor}>submit</button>
      </form>
    </div>
  )
}

export default Edit
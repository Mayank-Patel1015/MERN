import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {

  const Navigate = useNavigate()

  const [name, setName] = useState()
  const [author, setAuthor] = useState()

  const createAuthor = (e) => {
    e.preventDefault()
    console.log(name)
    axios.post("http://localhost:8000/api/author", { name: name })
      .then(res => setAuthor(res.data))
      .catch(err => console.log(err))
    Navigate('/authors')
  }

  return (
    <div>Form
      <a href='/authors'>Home</a>
      <form>
        <label> Name: </label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} /><br />
        <button onClick={() => Navigate('/authors')}>cancel</button>
        <button onClick={createAuthor}>submit</button>
      </form>
    </div>
  )
}

export default Form
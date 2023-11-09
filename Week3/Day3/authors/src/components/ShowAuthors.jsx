import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ShowAuthors = () => {

  const [authors, setAuthors] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/authors")
      .then(res => {
        console.log(res.data);
        setAuthors(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const deleteOne = (id) => {
    axios.delete("http://localhost:8000/api/author/" + id)
      .then(res => {
        const filteredAuthors = authors.filter((eachAuthor) => {
          return eachAuthor._id !== id;
        });
        setAuthors(filteredAuthors);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <a href='/author/create'> Add an Author </a>
      <p> We have quotes by: </p>
      <table style={{ width: "70%", marginLeft: "15%", }}>
        <tr style={{ backgroundColor: "grey", color: "white" }}>
          <th>Author</th>
          <th>Actions Available</th>
        </tr>

        {
          authors.map((author) => {
            return (
              <tr key={author._id}>
                <td>{author.name}</td>
                <td>
                  <Link to={'/authors/' + author._id}>
                    <button>edit</button>
                  </Link>
                  <Link to={'/authors'}>
                    <button onClick={() => deleteOne(author._id)}>delete</button>
                  </Link>
                </td>
              </tr>
            )
          })
        }
      </table>
    </div >
  )
}

export default ShowAuthors
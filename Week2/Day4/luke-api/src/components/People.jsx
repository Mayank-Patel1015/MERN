import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const People = (props) => {
  const { id } = useParams()
  const [person, setPerson] = useState(null)
  useEffect(() => {
    axios.get("https://swapi.dev/api/people/" + id)
      .then(res => {
        console.log(res.data)
        setPerson(res.data)
      })
      .catch(err => console.log(err))
  }, [id]);
  return (
    <fieldset>
      <div>
        <h1>Person</h1>
        {person === null ? "Loading" :
          <>
            <h2>{person.name}</h2>
            <p>Height: {person.height} cm</p>
            <p>Mass: {person.mass} kg</p>
            <p>Hair Color: {person.hair_color}</p>
            <p>Skin Color: {person.skin_color}</p>
          </>
        }
      </div>
    </fieldset>
  )
}

export default People
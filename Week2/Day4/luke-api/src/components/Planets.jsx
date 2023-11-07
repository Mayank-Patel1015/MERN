import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Planets = (props) => {
  const { id } = useParams()
  const [planet, setPlanet] = useState(null)
  useEffect(() => {
    axios.get("https://swapi.dev/api/planets/" + id)
      .then(res => {
        console.log(res.data)
        setPlanet(res.data)
      })
      .catch(err => console.log(err))
  }, [id]);
  return (
    <fieldset>
      <div>
        <h1>Planets</h1>
        {planet === null ? "Loading" :
          <>
            <h2>{planet.name}</h2>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Surface Water: {planet.surface_water ? "True" : "False"}</p>
            <p>Population: {planet.population}</p>
          </>
        }
      </div>
    </fieldset>
  )
}

export default Planets
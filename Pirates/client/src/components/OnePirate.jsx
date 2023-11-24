import React, { useState, useEffect } from 'react'
import './OnePirate.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const OnePirate = (props) => {

  const { id } = useParams()
  const [pirate, setPirate] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:8000/api/pirates/" + id)
      .then(res => {
        console.log(res.data);
        setPirate(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);


  return (
    <div>
      <div className='title'>
        <h1>Deep Sea Davy</h1>
      </div>
      {
        pirate === null ? 'loading..' :
          (
            <>
              <div className='body flex'>
                <div className='left'>
                  <img src={`${pirate.image}`} alt="" />
                  <h2>{pirate.catchPhrase}</h2>
                </div>
                <div className='right'>
                  <h3>About</h3>
                  <p>Position: {pirate.position}</p>
                  <p>Treasures: {pirate.numChests}</p>
                  <p>Peg Leg: {pirate.peg ? "Yes" : "No"}</p>
                  <p>Eye Patch: {pirate.patch ? "Yes" : "No"}</p>
                  <p>Hook Hand: {pirate.hook ? "Yes" : "No"}</p>
                </div>
              </div>
            </>
          )
      }
    </div>
  )
}

export default OnePirate
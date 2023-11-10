import React, { useEffect, useState } from 'react'
import './ShowPirates.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ShowPirates = () => {

  const Navigate = useNavigate()
  const [pirates, setPirates] = useState([])

  const orderPirates = (piratesArray) => {
    const sortedPirates = [...piratesArray].sort((a, b) => a.name.localeCompare(b.name));
    setPirates(sortedPirates);
  };

  useEffect(() => {
    axios.get("http://localhost:8000/api/pirates")
      .then(res => {
        console.log(res.data);
        setPirates(res.data);
        orderPirates(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const deletePirate = (id) => {
    axios.delete("http://localhost:8000/api/pirates/" + id)
      .then(res => {
        console.log("OK DELETED", res.data);
        const filteredPirates = pirates.filter((eachPirate) => {
          return eachPirate._id !== id;
        });
        setPirates(filteredPirates);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div className='title'>
        <h2>Pirate Crew</h2>
        <button className='button' onClick={() => Navigate('/pirate/new')}>Add Pirate</button>
      </div>
      <div className='body'>
        {
          pirates.map((pirate) => {
            return (
              <div className='flex white' key={pirate._id}>
                <div className='img'>
                  <img src={`${pirate.image}`} alt="" />
                  <h2>{pirate.catchPhrase}</h2>
                </div>
                <div>
                  <h1>{pirate.name}</h1>
                  <div className='flex space-between'>
                    <button className='button' onClick={() => Navigate('/pirate/' + pirate._id)}>View Pirate</button>
                    <button className='button red' onClick={() => deletePirate(pirate._id)}>Walk the Plank</button>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default ShowPirates
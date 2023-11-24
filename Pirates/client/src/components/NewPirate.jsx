import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './NewPirate.css'
import axios from 'axios'

const NewPirate = () => {

  const Navigate = useNavigate()

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [numChests, setNumChests] = useState(0)
  const [catchPhrase, setCatchPhrase] = useState("")
  const [position, setPosition] = useState("")
  const [peg, setPeg] = useState(true)
  const [patch, setPatch] = useState(true)
  const [hook, setHook] = useState(true)

  const [errors, setErrors] = useState([])
  const [pirates, setPirates] = useState([])
  const [hasCap, setHasCap] = useState(0)

  const submitHandler = (e) => {
    e.preventDefault();
    const tempObj = {
      name,
      image,
      numChests,
      catchPhrase,
      position,
      peg,
      patch,
      hook
    };

    axios.post("http://localhost:8000/api/pirate", tempObj)
      .then(res => {
        console.log(res.data);
        Navigate("/pirates");
      })
      .catch(err => {
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message)
        }
        // Set Errors
        setErrors(errorArr);
      })
  };


  useEffect(() => {
    axios.get("http://localhost:8000/api/pirates")
      .then(res => {
        console.log(res.data);
        setPirates(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    pirates.map((pirate) => {
      if (pirate.position === "Captain") {
        setHasCap(1)
      }
    })
  }
  )


  return (
    <div>
      <div className='title'>
        <h1>Add Pirate</h1>
        <button className='button' onClick={() => Navigate('/pirates')}>Crew Board</button>
      </div>
      <form onSubmit={submitHandler}>
        {errors.map((err, index) => <p key={index}>{err}</p>)}
        <div className='body flex'>
          <div className='left'>
            name:<br />
            <input type="text" value={name} onChange={e => setName(e.target.value)} /><br />
            image:<br />
            <input type="text" value={image} onChange={e => setImage(e.target.value)} /><br />
            number of chests:<br />
            <input type="number" value={numChests} onChange={e => setNumChests(e.target.value)} /><br />
            catch phrase:<br />
            <input type="text" value={catchPhrase} onChange={e => setCatchPhrase(e.target.value)} /><br />
          </div>
          <div className='right'>
            crew position: <br />
            <select size={5} name="position" value={position} onChange={e => setPosition(e.target.value)}>
              {
                hasCap ? "already got a cap" :
                  < option value="Captain" >Captain</option>
              }
              <option value="First Mate">First Mate</option>
              <option value="Quarter Master">Quarter Master</option>
              <option value="Boatswain">Boatswain</option>
              <option value="Powder Monkey">Powder Monkey</option>
            </select><br />
            <input type="checkbox" checked={peg} onChange={e => setPeg(e.target.checked)} /> Peg Leg <br />
            <input type="checkbox" checked={patch} onChange={e => setPatch(e.target.checked)} /> Eye Patch <br />
            <input type="checkbox" checked={hook} onChange={e => setHook(e.target.checked)} /> Hook Hand <br />
            <button className='button'>Add Pirate</button>
          </div>
        </div>
      </form >
    </div >
  )
}

export default NewPirate
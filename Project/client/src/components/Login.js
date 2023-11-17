import React from 'react'
import { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState("")
  const [username2, setUsername2] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [bussiness, setBussiness] = useState("warehouse")
  const [email, setEmail] = useState("")
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginLeft: "10%", width: '50%', marginTop: '10%' }}>
        <form>
          <h1>
            Login
          </h1>
          <p>Username:
            <input type='text' value={username} onChange={e => setUsername(e.target.value)}></input></p>
          <p>Password:
            <input type='text' value={password} onChange={e => setPassword(e.target.value)}></input></p>
          <button>Submit</button>
        </form>
      </div>
      <div style={{ marginLeft: "5%", width: '50%', marginTop: '10%' }}>
        <form>
          <h1>Register</h1>
          <p>Username:
            <input type='text' value={username2} onChange={e => setUsername2(e.target.value)}></input></p>
          <p>Email:
            <input type='text' value={email} onChange={e => setEmail(e.target.value)}></input></p>
          <p>Password:
            <input type='text' value={password2} onChange={e => setPassword2(e.target.value)}></input></p>
          <p>Confirm Password:
            <input type='text' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}></input></p>
          <p>Bussiness Type:
            <select value={bussiness} onChange={e => setBussiness(e.target.value)}>
              <option value="warehouse">warehouse</option>
              <option value="shop">shop</option>
            </select></p>
          <button>Submit</button>
        </form>
      </div>




    </div >
  )
}

export default Login
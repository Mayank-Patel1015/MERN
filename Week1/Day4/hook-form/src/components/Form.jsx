import { useState } from "react"

const Form = (props) => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [firstNameError, setFirstNameError] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 1) {
      setFirstNameError("First name is required!");
    } else if (e.target.value.length < 3) {
      setFirstNameError("First name must be 3 characters or longer!");
    } else {
      setFirstNameError("");
    }
  }

  return (
    <fieldset>
      <legend>Form.jsx</legend>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="firstName">firstname:</label>
        <input type="text" id="firstName" onChange={handleFirstName} /> <br />
        {
          firstNameError ?
            <p>{firstNameError}</p> :
            ''
        }
        {/* <label htmlFor="lastName">lastname:</label> */}
        {/* <input type="text" id="lastName" onChange={handleLastName}></input> <br /> */}
        <label htmlFor="email">email:</label>
        <input type="text" id="email" onChange={(e) => setEmail(e.target.value)} /> <br />
        <label htmlFor="password">password:</label>
        <input type="text" id="password" onChange={(e) => setPassword(e.target.value)} /> <br />
        <label htmlFor="confirmPassword">confirm password:</label>
        <input type="text" id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} /> <br />
        <button> submit </button>
      </form>
      <div>
        <p>First Name: {firstName} </p>
        <p>Last Name: {lastName} </p>
        <p>Email: {email} </p>
        <p>Password: {password} </p>
        <p>Confirm Password: {confirmPassword} </p>
      </div>
    </fieldset>
  )
}

export default Form
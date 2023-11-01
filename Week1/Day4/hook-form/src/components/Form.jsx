import { useState } from "react"

const Form = (props) => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [cpasswordError, setCpasswordError] = useState("");

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
  const handleLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 1) {
      setLastNameError("Last name is required!");
    } else if (e.target.value.length < 3) {
      setLastNameError("Last name must be 3 characters or longer!");
    } else {
      setLastNameError("");
    }
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 1) {
      setEmailError("Email is required!");
    } else if (e.target.value.length < 6) {
      setEmailError("Email must be longer then 5 characters");
    } else {
      setEmailError("");
    }
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 1) {
      setPasswordError("Password is required!");
    } else if (e.target.value.length < 9) {
      setPasswordError("Password must be 8 characters or longer!");
    } else {
      setPasswordError("");
    }
  }
  const handleCPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value.length < 1) {
      setCpasswordError("Confirm Password is required!");
    } else if (e.target.value.length < 9) {
      setCpasswordError("Confirm Password must be 8 characters or longer!");
    } else {
      setCpasswordError("");
    }
    if (e.target.value !== password) {
      setCpasswordError("The password and confirm password must match.")
    }
  }
  const reset = (e) => {
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
  }

  return (
    <fieldset>
      <legend>Form.jsx</legend>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="firstName">firstname:</label>
        <input type="text" id="firstName" onChange={handleFirstName} value={firstName} /> <br />
        {
          firstNameError ?
            <p>{firstNameError}</p> :
            ''
        }
        <label htmlFor="lastName">lastname:</label>
        <input type="text" id="lastName" onChange={handleLastName} /><br />
        {
          lastNameError ?
            <p>{lastNameError}</p> :
            ''
        }
        <label htmlFor="email">email:</label>
        <input type="text" id="email" onChange={handleEmail} /><br />
        {
          emailError ?
            <p>{emailError}</p> :
            ''
        }
        <label htmlFor="password">password:</label>
        <input type="text" id="password" onChange={handlePassword} /><br />
        {
          passwordError ?
            <p>{passwordError}</p> :
            ''
        }
        <label htmlFor="confirmPassword">confirm password:</label>
        <input type="text" id="confirmPassword" onChange={handleCPassword} /><br />
        {
          cpasswordError ?
            <p>{cpasswordError}</p> :
            ''
        }
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
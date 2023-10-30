import React from 'react'

const Display = (props) => {
  return (
    <fieldset>
      <legend> Display.jsx </legend>
      <div>{props.firstName}</div>
    </fieldset>
  )
}

export default Display
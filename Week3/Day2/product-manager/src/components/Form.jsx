import React from 'react'
import './Form.css';

const Form = () => {
  return (
    <fieldset>
      <div className='form'>
        <form>
          <label for="title">Title: </label>
          <input type="text"></input><br />
          <label for="price">Price: </label>
          <input type="number"></input><br />
          <label for="description">Description: </label>
          <input type="text" id="lname" name="lname"></input><br />
          <button>Create</button>
        </form>
      </div>
    </fieldset>
  );
}

export default Form
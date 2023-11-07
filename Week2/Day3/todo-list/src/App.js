import './App.css';
import { useState } from "react"
import Display from './components/Display';

function App() {

  const [value, setValue] = useState("")
  const [checked, setChecked] = useState(false)
  const [list, setList] = useState([
    {
      value: "some text",
      checked: false
    },
    {
      value: "some other text",
      checked: true
    }
  ])

  function changeChecked(i) {
    const copy = [...list]
    copy[i].checked = !copy[i].checked
    setList(copy)
  }

  const addItem = (e) => {
    e.preventDefault()

    const newItem = {
      value,
      checked
    }

    setList([...list, newItem])
    console.log('submit it')
    console.log(list)
    console.log(newItem)
  }

  const deleteItem = (i) => {
    const filteredItems = list.filter((Element, idx) => {
      return idx != i
    })
    setList(filteredItems)
  }

  return (
    <fieldset>
      <div className="App" >
        <p>{JSON.stringify(value)}</p>
        <form onSubmit={addItem}>
          <input value={value} onChange={(e) => setValue(e.target.value)}></input>
          <button>Add</button>
        </form>
      </div>
      <hr />
      <Display list={list} changeChecked={changeChecked} deleteItem={deleteItem} />

    </fieldset>
  );
}

export default App;

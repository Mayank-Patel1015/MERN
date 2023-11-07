import React from 'react'

const Display = (props) => {

  const changeChecked = (i) => {
    props.changeChecked(i)
  }

  const deleteHandler = (idx) => {
    props.deleteItem(idx)
  }

  return (
    <div>Display
      {
        props.list.map((item, i) => {
          return (
            <div key={i}>
              {
                item.checked ?
                  <strike><p>{item.value}</p></strike> :
                  <p>{item.value}</p>
              }
              <p>{<input type="checkbox" checked={item.checked} onChange={e => changeChecked(i)}  ></input>}</p>
              <button onClick={() => deleteHandler(i)}>delete</button>
            </div>
          )
        }
        )}
    </div>
  )
}

export default Display
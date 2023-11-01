import React from "react";
import {
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

const Display = () => {
  const { elem } = useParams()
  if (isNaN(elem)) {
    return (
      <h2> The word is: {elem} </h2>
    )
  }

  return (
    <h2> Your number is: {elem}</h2>
  )
}

const Display2 = () => {
  const { word } = useParams()
  const { textColor } = useParams()
  const { bgColor } = useParams()
  return (
    <p style={{ color: `${textColor}`, backgroundColor: `${bgColor}` }}> The word is: {word}</p>
  )
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<h1>Welcome</h1>} />
        <Route path="/:elem" element={<Display />} />
        <Route path="/:word/:textColor/:bgColor" element={<Display2 />} />
      </Routes>
    </div>
  );
}

export default App
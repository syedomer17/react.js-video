import { useState } from "react"
import React  from 'react'

function App() {

  const [count,setCount] = useState(0);

  const [but,setBut] = useState(false);

  const [text,setText] = useState("");

  const [hide,setHide] = useState(false);

  

  return (
    <>
    <div>
      <h1>Virtual dom</h1>
      <p>Counter: {count}</p>
      <button onClick={()=> setCount(count + 1)}>Click Me</button>
    </div>
    <hr />
    <h1>Toggle Button</h1>
    <button onClick={() => setBut(!but)}>{but ? "ON":"OFF"}</button>
    <hr />
    <h2>Type SomeThing</h2>
    <input type="text" value={text} onChange ={(e) => setText(e.target.value)} placeholder="Type Here..." />
    <p>Your Typing {text}</p>
    <hr />
    <h2>Show/Hiden Text</h2>
    <button onClick={()=> setHide(!hide)}>{hide ? "Hide":"Show"}Text</button>
    {hide && <p>This can be hidden or show!</p>}
    </>
  )
}

export default App
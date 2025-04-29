import { useState } from "react";

function App() {
  let [count,setCount] = useState(10);
  const increamentHandler =()=>{
    if(count <= 20)
    {
      setCount(count+1)
    }
  }
  const decreamentHandler =()=>{
    if(count >= 0)
    {
      setCount(count-1)
    }
  }

  return (
    <>
      <h1>Hello world</h1>  
      <h2>Count = {count}</h2>
      <button onClick={increamentHandler}>Increament</button>
      <br/>
      <button onClick={decreamentHandler}>Decreament</button>
    </>
    
  );
}

export default App;

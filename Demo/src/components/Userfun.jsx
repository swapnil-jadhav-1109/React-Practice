import React, { useState } from 'react'

const Userfun = () => {
    const [count , setCount] = useState(0);
  return (
    <div>
       <h1>count = {count}</h1>
       <button onClick={()=>{
        setCount(count + 1);
       }}>count Increase</button>
    </div>
  )
}

export default Userfun

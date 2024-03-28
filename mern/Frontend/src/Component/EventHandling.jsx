import React, { useState } from 'react'
import Swal from 'sweetalert2'


const EventHandling = () => {
   
  const [count, setCount] = useState(0)
  
  const handleButtonClick = () =>{
    Swal.fire("SweetAlert2 is working!");
  }
  const handleIncrement = () => {
    setCount(count+1)
  }
  const handleDecrement = () => {
    setCount(count-1)
  }
  const handleReset = () => {
    setCount(0)
  }

  return (
    <div>
      <h1> Event Handling Example</h1>
      <button onClick={handleButtonClick} className='btn btn-primary'>Click me</button>

      <section className='mt-5'>
        <h2>Count Handling</h2>
        <h4 classNmae=''>Number of count: </h4>
        <div className='button-container'>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>decremenat</button>
          <button onClick={handleReset}>Reset</button>

        </div>
      </section>
    </div>
  )
}

export default EventHandling
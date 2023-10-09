import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [decreaseCount,setDecreaseCount] = useState(0);



    const increaseCount = () =>{
        setCount(count + 1)
    }

    const handleDecrease = () =>{
        setDecreaseCount(decreaseCount - 1)
        // setCount(count - 1)
    }
    // useEffect(()=>{
    //     console.log("Welcome to DambarSIng")
    // },[])

    useEffect(()=>{
        console.log("Count value is changed")
    },[count,decreaseCount])
  return (
    <div>
        <div>{count}</div>
        <button onClick={increaseCount}>+</button>

        <div>{decreaseCount}</div>
        <button onClick={handleDecrease}>-</button>
 
    </div>
    )
}

export default UseEffect
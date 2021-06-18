import React,{useState} from 'react'

function StateHookTwo() {

    const firstState=0
    const [count,setCount]=useState(firstState)

    const increment =() =>{
        setCount(firstState)
    }
    return (
        <div>
            Count : {count}
            <br />
            <button onClick={() =>setCount(count+1)}>Increment</button>
            <button onClick={() =>setCount(count-1)}>Decrement</button>
            <button onClick={() =>setCount(count+5)}>Five</button>
            <button onClick={increment}>Reset</button>


        </div>
        
    )
}

export default StateHookTwo

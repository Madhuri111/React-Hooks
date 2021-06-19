import React,{useState,useEffect} from 'react'

//componentdidupdate called any time component updates

function UseEffectHook() {

    const [count,setCount]=useState(0)
    //for useeffect hook,you will pass a function passed as an argument  which gets executed every time after every render of component


    //In place of below code , incase of class components we will use componentDidMount
    useEffect(()=>{
        document.title=`You clicked ${count} times`
    })

    //effect hook is close replacement for componentdidmount ,componentdidmount etc
    //3 life cycle methods can be handled by useeffect hook    
    return (
        <div>
            <h2 className="hey-there">
                <button onClick={()=>setCount(count+1)}>you clicked {count} times</button>                
            </h2>
        </div>
    )
}

export default UseEffectHook

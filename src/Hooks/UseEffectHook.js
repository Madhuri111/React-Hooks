import React,{useState,useEffect} from 'react'

//componentdidupdate called any time component updates

function UseEffectHook() {

    const [count,setCount]=useState(0)
    const [name,setName]=useState('')
    //for useeffect hook,you will pass a function passed as an argument  which gets executed every time after every render of component


    //In place of below code , incase of class components we will use componentDidMount
    useEffect(()=>{

        //for conditionally executing an effect we pass second parameter which is array in which we need to specify props etc we need to watch for
        //second paramater is array of values that useEffect depends on....so if this value doesnt change between errors then his effect wont run
        //so as we need to console this string only when count value changes , we passed count as second parameter
        console.log('Updating Doc Title')
        document.title=`You clicked ${count} times`
    },[count])

    //effect hook is close replacement for componentdidmount ,componentdidmount etc
    //3 life cycle methods can be handled by useeffect hook    
    return (
        <div>
            <h2 className="hey-there">
            <input type="text"  value={name} onChange={e=> setName(e.target.value)} />
                <button onClick={()=>setCount(count+1)}>you clicked {count} times</button>                
            </h2>
        </div>
    )
}

export default UseEffectHook

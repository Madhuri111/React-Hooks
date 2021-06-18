import React,{useState} from 'react'

function StateHookThree() {

    const [name,setName]=useState({ firstname:'',lastname:''})
    return (

        <form>
            {/* adding "...name," in setName function basically tells that add everything thats there in name and modify firstname" */}
            <input type="text"  value={name.firstname} onChange={e=> setName({...name,firstname:e.target.value})} />
            <input type="text" value={name.lastname} onChange={e=>setName({...name,lastname:e.target.value})} />


            {/* //useState doesnt automatically updates and merges..you have to merge and pass to setter function */}
            <h3>Your first name is {name.firstname}</h3>
            <h3>Your last name is {name.lastname}</h3>
            <h2>{JSON.stringify(name)}</h2>

        </form>
    )
}

export default StateHookThree

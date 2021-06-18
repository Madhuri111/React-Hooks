import React, { useState } from 'react'


//About hooks 
// Hooks are to use react feautures without having to write a class
//they dont work inside class
//Hooks allows us to reuse stateful logic without rewriting hierarchy of component
//The need to change a functional component to a class component, whenever state management or lifecycle methods were to be used, led to the development of Hooks.
//can use in react version >=16.8


function StateHook() {

    //useState Hook example

    const [count, setCount] = useState(0)

    return (


        //Onclick is some event that declares when something is    clicked
        //Onchange is even that declares when input is changed
        //Simply put, you should use onchange if the event that you are waiting for is a change in an input. You should only use onclick while waiting for just clicks, as it may not intercept all possible ways of changing an input. Don’t get clever.
        <div>
            <h1>Hello</h1>
            <button onClick={() =>setCount(count+1)}>Count : {count}</button>
        </div>
    );
}

export default StateHook;



//rfce command in visual code for opening react component syntax
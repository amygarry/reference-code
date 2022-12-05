import React, {useState} from "react"

function StateComponent (){

    const [userInput, SetUserInput] = useState('')
//each peice of use state has a variable and a function. The fuction updates the variable. So we start by setting it to whatever we want the initial value to be. (in this case we write an empty string. in another case we might put it as 0 or some number we are starting with. Honestly just depends on what we want to start with) This variable and function can be referenced anywhere. 

    const handleUpdateState = (event)=>SetUserInput(event.target.value)
// this is a fucnction that we wrote. Its a one line arrow function that says to updated the state to the value of the targeted event. 

    return (
        <div className="card">
            <h2>useState</h2>
            <h3>State: {userInput}</h3>
            <input type="text" onChange={handleUpdateState}/>
        </div>

        //on the input we add an on change so thats saying that everytime the input value changes we are going to call the function that we wrote. 
    )
}

export default StateComponent
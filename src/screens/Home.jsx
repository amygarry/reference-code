import React, {useRef} from "react"
import {useNavigate} from 'react-router-dom'

function Home (){
    const userInputRef = useRef()
    const navigate = useNavigate()
    
    const handleClick =()=>{
        let checkInput = +userInputRef.current.value

        console.log(checkInput)

        if(Number.isFinite(checkInput)){
            console.log("number")
            navigate(`/details/${checkInput}`)
        }else{
            console.log("not a number")
        }
    }
    return (
        <div className="col-container">
            <h1>Home</h1>
            <input type="text" ref={userInputRef}/>
            <button onClick={handleClick}>Leave</button>
        </div>
    )
}

export default Home
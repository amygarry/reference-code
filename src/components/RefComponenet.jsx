import React, {useRef} from "react"

function RefComponent (){

    const inputRef = useRef()

    const checkRef =()=>{
        alert(`Your input has the string ${inputRef.current.value}`)
        inputRef.current.value=""
        inputRef.current.focus()
    }

    return (
        <div className="card">
            <h2>useRef</h2>
            <input type="text" ref={inputRef}/>
            <button onClick={checkRef}>What's my ref?</button>
        </div>
    )
}
export default RefComponent
import React,{useState, useEffect} from "react"
import axios from "axios"

function EffectComponent (){

    const [data, setData]= useState({})
    //setting up the state. 

    const getData = ()=>{
        //a function to go get information about starwars
        axios.get('https://www.swapi.tech/api/people/1')
        //the url to get the info 
        .then((res)=>{
            setData(res.data.result.properties)
        })
        //telling it what to do with the date. We are updateing the state of the data here.
        .catch((err)=>{
            console.log(err)
        }
        // a catch because that is always good.
        )
    }


    useEffect(()=>{getData()}, [])
    // we used this when something else is effected. it takes in a function(this function we wrote is an anyonomys arrow function. which sets off the get data function we wrote earlier. The we have the conditions under which we would use that function in this case we left if blank because we have no dependencies.)

    return (
        <div className="card">
            <h2>useEffect</h2>
            <h3>Name: {data.name}</h3>
        </div>
    )
}

export default EffectComponent
import React, { useState } from 'react'
import Input from './Component/input'

function App(){

    const[pickup,setPickup] = useState('')
    const[drop,setDrop] = useState('')

    const changePickUp = (evt)=>{
        setPickup(evt.target.value)
    }

    const changeDrop = (evt)=>{
        if (evt.target.value == pickup) {
            setDrop('')
            return
        }
        setDrop(evt.target.value)
    }

    return(
        <div>
            <h1>Taxi Fare Estimator</h1>
            <Input placeholder="Enter pickup location" 
            value={pickup} 
            onChange={changePickUp}
            onSelect={(val)=>{
                if (val == drop) {
                    setPickup('')
                    return
                }
                setPickup(val)
            }}/>
            <br/>
            <Input placeholder="Enter drop location" 
            value={drop} 
            onChange={changeDrop}
            onSelect={(val)=>{
                if (val == pickup) {
                    setDrop('')
                    return
                }
                setDrop(val)
                }
                }/>
        </div>
    )
}
export default App
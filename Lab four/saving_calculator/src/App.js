import React from 'react'
import Input from './Component/input'

function App(params) {

    const[salary,setSalary] = React.useState(null)
    const[property,setProperty] = React.useState(null)
    const[saving,setSaving] = React.useState(null)

    const calculate = ()=>{
        var downPay = (25*property)/100
        var salaryPerMonth = salary/12
        var savingInAmount = (salaryPerMonth*(saving))
        alert(Math.round(downPay/savingInAmount))
    }

    const changeSalary = (evt) => {
        setSalary(evt.target.value)
    }

    const changeProperty = (evt) => {
        setProperty(evt.target.value)
    }

    const changeSaving = (evt) => {
        setSaving((evt.target.value))
    }

    return(
        <div>
            <h1>Saving Calculator</h1>
            <Input placeholder='Enter the annual income' value={salary} onChange={changeSalary}/>
            <br/>
            <Input placeholder='Enter the total value of property' value={property} onChange={changeProperty}/>
            <br/>
            <Input placeholder='Enter the percent of saving per month' value={saving} onChange={changeSaving}/>
            <br/>
            <input type='button' onClick={calculate} value='calculate'/>
        </div>
    )
}

export default App
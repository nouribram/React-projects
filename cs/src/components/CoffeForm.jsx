import { coffeOptions } from "../utils"
import { useState } from "react"

export default function CoffeForm() {
    
    const [selectedCoffe, setSelectedCoffe] = useState(null)
    const [showCoffeTypes, setShowCoffeTypes] = useState(false)


    return(
        <>

         <div className="section-header">
            <i className="fa-solid fa-pencil"/>
            <h2>Start Tracking toda</h2>
         </div>
         <h4>Select Coffet Type</h4>
         <div className="coffe-grid">
            {coffeOptions.slice(0, 5).map((option, optionIndex) => {
                return (
                    <button onClick={() => {
                       setSelectedCoffe(option.name)
                       setShowCoffeTypes(false)
                    }} 
                    className={"button-card" + (option.name === selectedCoffe ? ' coffe-button-selected' : ' ')} key={optionIndex}>
                       <h4>{option.name}</h4>
                       <p>{option.caffeine}mg</p>
                    </button>
                )
            })}
            <button onClick={() => {
                setShowCoffeTypes(true)
                setSelectedCoffe(null)
            }}className={"button-card" + (showCoffeTypes ? ' coffe-button-selected' : ' ')}>
                <h4>other</h4>
                <p>n/a</p>
            </button>
           {showCoffeTypes && (
             <select onChange={(e) => {
                
             }} id="coffe-list" name="coffe-list">
                <option value={null}>
                    select type
                </option>
                {coffeOptions.map((option, optionIndex) => {
                    return(
                        <option value={option.name} key={optionIndex}>
                            {option.name} ({option.caffeine} mg)
                        </option>
                    )
                })}
            </select> )}
            <h4>add the cost ($)</h4>
            <input className="w-full" type="number" placeholder="4.50"/>
            <h4>Time since consumption</h4>
            <div className="time-entry">
                <div>
                    <h6>Hours</h6>
                    <select id="hours-select">
                        {[0,1,2,3,4,5,6,7,8,9,1,11,12,13,14,15,16,17,18,19,20,21,22,23].map((hour, hourIndex) => {
                        return(
                            <option key={hourIndex} value={hour}>{hour}</option>
                        )
                        })}
                    </select>
                </div>

                  <div>
                    <h6>Mins</h6>
                    <select id="mins-select">
                        {[0, 5, 10, 15, 30, 45].map((min, minIndex) => {
                        return(
                            <option key={minIndex} value={min}>{min}</option>
                        )
                        })}
                    </select>
                </div>
            </div>
            <button>
                <p>Add Entry</p>
            </button>
         </div>
             
        </>
    )
}
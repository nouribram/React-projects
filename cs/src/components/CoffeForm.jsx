import { coffeOptions } from "../utils"


export default function CoffeForm() {

    return(
        <>

         <div className="section-header">
            <i className="fa-solid fa-pencil"/>
            <h2>Start Tracking today</h2>
         </div>
         <h4>Select Coffet Type</h4>
         <div className="coffe-grid">
            {coffeOptions.slice(0, 5).map((option, optionIndex) => {
                return (
                    <button className="button-card" key={optionIndex}>
                       <h4>{option.name}</h4>
                       <p>{option.caffeine}mg</p>
                    </button>
                )
            })}
            <button className="button-card">
                <h4>other</h4>
                <p>n/a</p>
            </button>
            <select id="coffe-list" name="coffe-list">
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
            </select>
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
            </div>
         </div>
             
        </>
    )
}
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
         </div>
             
        </>
    )
}
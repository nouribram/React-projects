export default function Hero() {

    return(
        <>
          <h1>Coffe Tracking for Coffe<abbr title="An enthusiast or devoted">Fiends</abbr></h1>
           <div className="benefits-List">
            <h3 className="font-bolder">Try <span className="text-gradient">caffined</span> and start...</h3>
            <p>✅Tracking ever Coffe</p>
            <p>✅Measuring your blood caffeine levels</p>
            <p>✅Costing and quanitifying your addition</p>
           </div>
           <div className="card info-card">
             <div>
              <i className="fa-solid fa-circle-info"></i>
              <h3>Did you know...</h3>
             </div>
             <h5>That caffeine&appos;s half-life is about 5 hours?</h5>
             <p>this means that after 5 hours, half the caffeine you consumed is still in your system, keeping you alert longer! so if you drink a cup of coffe with 200 mg of caffeine, 5 hours, later, you&apos; still have about 100 mg of caffeine in your system </p>
           </div>
        </>
    )
}
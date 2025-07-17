import { calculateCurrentCaffeineLevel, coffeConsumptionHistory, statusLevels } from "../utils"

function statCard(props) {
    const { lg, title, children } = props
    return (
        <div className={'card stat-card' + (lg ? 'col-span-2' : '')}>
            <h4>{title}</h4>
            {children}
        </div>
    )
}

export default function Stats() {
    const stats = {
        daily_caffeine: 240,
        daily_cost: 6.8, 
        average_coffes: 2.3,
        total_cost: 220,
    }

    const caffeineLevel =  calculateCurrentCaffeineLevel(coffeConsumptionHistory)
    const warningLevel = caffeineLevel < statusLevels['low'].maxLevel ?
    'low' : 
    caffeineLevel < statusLevels['moderate'].maxLevel ?
    'moderate' : 
    'high'
    return(
        <>
             <div className="section-header">
                <i className="fa-solid fa-chart-simple"/>
                <h2>Stats</h2>
             </div>
             <div className="stats-grid">
                <statCard lg title="Active Caffeine Level">
                    <div className="status">
                        <p><span className="stat-text">{caffeineLevel}</span>mg</p>
                        <h5 style={{color: statusLevels['warningLevel'].color, background: statusLevels['warningLevel'].background}}>Low </h5> 
                    </div>
                    <p>{statusLevels['warningLevel'].description}</p>
                </statCard>
                <statCard title="Daily Caffeine">
                    <p><span className="stat-text">{stats.daily_caffeine}</span>mg</p>
                </statCard>
                <statCard title="Avg number">
                    <p><span className="stat-text">{stats.average_caffeine}</span>mg</p>
                </statCard>
                <statCard title="Daily Cost ($)">
                    <p>$<span className="stat-text">{stats.daily_cost}</span></p>
                </statCard>
                <statCard title="Total Cost ($)">
                    <p>$<span className="stat-text">{stats.total_cost}</span></p>
                </statCard>
                 <table className="stat-table">
                    <thead>
                        <tr>
                            <th>Coffe Name</th>
                            <th>Number of purchase</th>
                            <th>percentage of total</th>
                        </tr>
                    </thead>
                    <tbody>
                       {getTopThreeCoffes(coffeConsumptionHistory).map
                       ((coffe, coffeIndex) => {
                        return (
                            <tr key={coffeIndex}>
                                <td>{coffe.coffeName}</td>
                                <td>{coffe.count}</td>
                                <td>{coffe.percentage}</td>
                            </tr>
                        )
                       })} 
                    </tbody>
                 </table>
             </div>
        </>
    )
}
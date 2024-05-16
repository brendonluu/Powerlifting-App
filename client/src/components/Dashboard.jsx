import './Dashboard.css'
import HealthDisplay from './dashboard_components/HealthDisplay'
import NutritionDisplay from './dashboard_components/NutritionDisplay'
import WeightGraph from './dashboard_components/WeightGraph'
import FitnessDisplay from './dashboard_components/FitnessDisplay'

// Don't know how to make the seperation between display elements even yet
// If we can figure out a way to have the margin around them be the same 
// all around (including overlap) then we should change to that solution
function Dashboard() {
  return (
    <div className="Dashboard">
      <div className='top-row flex flex-col flex-1 p-8'>
        <HealthDisplay />
        <NutritionDisplay />
      </div>
      <div className='bottom-row flex flex-col flex-1 p-8'>
        <WeightGraph />
        <FitnessDisplay />
      </div>
    </div>
  )
}

export default Dashboard
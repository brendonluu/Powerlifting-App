import './Dashboard.css'
import HealthDisplay from './dashboard_components/HealthDisplay'
import NutritionDisplay from './dashboard_components/NutritionDisplay'
import WeightGraph from './dashboard_components/WeighGraph'
import FitnessDisplay from './dashboard_components/FitnessDisplay'

function Dashboard() {
  return (
    <div className="Dashboard">
      <div className='top-row'>
        <HealthDisplay />
        <WeightGraph />
      </div>
      <div className='bottom-row'>
        <NutritionDisplay />
        <FitnessDisplay />
      </div>
    </div>
  )
}

export default Dashboard
import { useEffect, useState } from 'react'
import { Header, List, Container } from 'semantic-ui-react'
import axios from 'axios'
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
    .then(response => {
      setActivities(response.data)
    })
  },[])

  return (
    <>
      <NavBar></NavBar>
      <Container style={{marginTop: '7em'}}>
        <ActivityDashboard activities={activities}/>
      </Container>
    </>
  )
}

export default App
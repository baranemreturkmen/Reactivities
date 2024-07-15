import { useEffect, useState } from 'react'
import { Header, List, Container } from 'semantic-ui-react'
import axios from 'axios'
import { Activity } from '../models/activity';
import NavBar from './NavBar';

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
      <List>
        {activities.map(activitiy => (
          <List.Item key={activitiy.id}>
            {activitiy.title}
          </List.Item>
        ))}
      </List>
      </Container>
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import { Header, List } from 'semantic-ui-react'
import axios from 'axios'
import { Activity } from '../models/activity';

function App() {
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
    .then(response => {
      setActivities(response.data)
    })
  },[])

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities'></Header>
      <List>
        {activities.map(activitiy => (
          <List.Item key={activitiy.id}>
            {activitiy.title}
          </List.Item>
        ))}
      </List>
    </div>
  )
}

export default App

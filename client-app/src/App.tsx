import { useEffect, useState } from 'react'
import { Header, List } from 'semantic-ui-react'
import axios from '../node_modules/axios/index'
import './App.css'

function App() {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
    .then(response => {
      setActivities(response.data)
    })
  },[])

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities'></Header>
      <List>
        {activities.map((activitiy: any) => (
          <List.Item key={activitiy.id}>
            {activitiy.title}
          </List.Item>
        ))}
      </List>
    </div>
  )
}

export default App

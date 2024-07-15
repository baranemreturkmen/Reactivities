import { Grid, List } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity';

interface Props {
    activities: Activity[];
}

const ActivityDashboard = ({activities}: Props) => {
  return (
    <div>
      <Grid>
        <Grid.Column width='10'>
        <List>
            {activities.map(activitiy => (
            <List.Item key={activitiy.id}>
                {activitiy.title}
            </List.Item>
        ))}
      </List>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default ActivityDashboard

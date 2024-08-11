import { Grid } from 'semantic-ui-react'
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import LoadingComponent from '../../../app/layout/LoadingComponent';

const ActivityDashboard = () => {
  const {activityStore} = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])

  if (activityStore.loadingInitial) return <LoadingComponent content='Loading app'></LoadingComponent>

  const {selectedActivity, editMode} = activityStore;

  return (
    <div>
      <Grid>
        <Grid.Column width='10'>
          <ActivityList />
        </Grid.Column>
        <Grid.Column width='6'>
          {selectedActivity && !editMode &&<ActivityDetails 
          ></ActivityDetails>}
          {editMode && <ActivityForm ></ActivityForm>}
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default observer(ActivityDashboard)

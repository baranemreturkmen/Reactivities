import { Grid, List } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

const ActivityDashboard = ({ activities, selectedActivity, createOrEdit, deleteActivity,
  selectActivity, cancelSelectActivity, editMode, openForm, closeForm, submitting}: Props) => {
    console.log("ActivityDashboard editmode: ",editMode);
  return (
    <div>
      <Grid>
        <Grid.Column width='10'>
          <ActivityList 
          activities={activities} 
          selectActivity={selectActivity} 
          deleteActivity={deleteActivity}/>
        </Grid.Column>
        <Grid.Column width='6'>
          {selectedActivity && !editMode &&<ActivityDetails 
          activity={selectedActivity} 
          cancelSelectActivity={cancelSelectActivity}
          openForm={openForm}></ActivityDetails>}
          {editMode && <ActivityForm closeForm={closeForm} 
          activity={selectedActivity} 
          createOrEdit={createOrEdit}
          submitting={submitting}></ActivityForm>}
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default ActivityDashboard

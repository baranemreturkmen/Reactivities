import { Button, Card, CardContent, CardDescription, CardHeader, CardMeta, Image } from "semantic-ui-react"
import { useStore } from "../../../app/stores/store";

const ActivityDetails = () => {

  const {activityStore} = useStore();
  const {selectedActivity: activity, openForm, cancelSelectedActivity} = activityStore;
  if (!activity) return;

  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} wrapped ui={false} />
      <CardContent>
        <CardHeader>{activity.title}</CardHeader>
        <CardMeta>
          <span>{activity.date}</span>
        </CardMeta>
        <CardDescription>
          {activity.description}
        </CardDescription>
      </CardContent>
      <CardContent extra>
        <Button.Group widths='2'>
            <Button onClick={() => openForm(activity.id)} basic color='blue' content='Edit'></Button>
            <Button onClick={cancelSelectedActivity} basic color='grey' content='Cancel'></Button>
        </Button.Group>
      </CardContent>
    </Card>
  )
}

export default ActivityDetails

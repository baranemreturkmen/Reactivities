import { Button, Item, Label, Segment } from "semantic-ui-react"
import { SyntheticEvent, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

const ActivityList = () => {
    const [target, setTarget] = useState('');
    const {activityStore} = useStore();
    const {deleteActivity, activities, loading} = activityStore;

    //e click event
    //All of these click events come from sth called a react synthetic event.
    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string){
        console.log("e.current.target: ",e.currentTarget)
        console.log("e.currerntTarget.name",e.currentTarget.name)
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }

  return (
    <Segment>
        <Item.Group divided>
            {activities.map(activity => (
                <Item key={activity.id}>
                    <Item.Content>
                        <Item.Header as='a'>{activity.title}</Item.Header>
                        <Item.Meta>{activity.date}</Item.Meta>
                        <Item.Description>
                            <div>{activity.description}</div>
                            <div>{activity.city}, {activity.venue}</div>
                        </Item.Description>
                        <Item.Extra>
                            <Button onClick={() => activityStore.selectActivity(activity.id)} floated='right' content='View' color='blue'></Button>
                            <Button 
                            name={activity.id}
                            loading={loading && target === activity.id} 
                            onClick={(e) => handleActivityDelete(e,activity.id)} 
                            floated='right' 
                            content='Delete' 
                            color='red'></Button>
                            <Label basic content={activity.category}></Label>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            ))}
        </Item.Group>
    </Segment>
  )
}

export default observer(ActivityList);

import { SyntheticEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Item, Label } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'
import { useStore } from '../../../app/stores/store'

interface Props {
    activity: Activity
}

const ActivityListItem = ({activity}: Props) => {
    const [target, setTarget] = useState('');
    const {activityStore} = useStore();
    const {deleteActivity, loading} = activityStore;

    //e click event
    //All of these click events come from sth called a react synthetic event.
    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string){
        console.log("e.current.target: ",e.currentTarget)
        console.log("e.currerntTarget.name",e.currentTarget.name)
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }

    return (
        <div>
            <Item key={activity.id}>
                <Item.Content>
                    <Item.Header as='a'>{activity.title}</Item.Header>
                    <Item.Meta>{activity.date}</Item.Meta>
                    <Item.Description>
                        <div>{activity.description}</div>
                        <div>{activity.city}, {activity.venue}</div>
                    </Item.Description>
                    <Item.Extra>
                        <Button as={Link} to={`/activities/${activity.id}`} floated='right' content='View' color='blue'></Button>
                        <Button
                            name={activity.id}
                            loading={loading && target === activity.id}
                            onClick={(e) => handleActivityDelete(e, activity.id)}
                            floated='right'
                            content='Delete'
                            color='red'></Button>
                        <Label basic content={activity.category}></Label>
                    </Item.Extra>
                </Item.Content>
            </Item>
        </div>
    )
}

export default ActivityListItem

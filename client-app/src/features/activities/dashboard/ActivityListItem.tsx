import { SyntheticEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Item, Label, Segment } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'
import { useStore } from '../../../app/stores/store'

interface Props {
    activity: Activity
}

const ActivityListItem = ({ activity }: Props) => {
    const [target, setTarget] = useState('');
    const { activityStore } = useStore();
    const { deleteActivity, loading } = activityStore;

    //e click event
    //All of these click events come from sth called a react synthetic event.
    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        console.log("e.current.target: ", e.currentTarget)
        console.log("e.currerntTarget.name", e.currentTarget.name)
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src='/assets/user.png' />
                        <Item.Content>
                            <Item.Header as={Link} to={`activities/${activity.id}`}>
                                {activity.title}
                            </Item.Header>
                            <Item.Description>Hosted by Bob</Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment secondary>
                Attendees go here
            </Segment>
            <Segment clearing>
                <span>{activity.description}</span>
                <Button
                    as={Link}
                    to={`/activities/${activity.id}`}
                    color='teal'
                    floated='right'
                    content='View'
                />
            </Segment>
        </Segment.Group>
    )
}

export default ActivityListItem

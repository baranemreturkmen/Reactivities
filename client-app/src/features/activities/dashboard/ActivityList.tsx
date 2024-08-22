import { Header, Item, Segment } from "semantic-ui-react"
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import ActivityListItem from "./ActivityListItem";
import { Fragment } from "react/jsx-runtime";

const ActivityList = () => {
  const { activityStore } = useStore();
  const { groupedActivities } = activityStore;

  return (
    <>
      {
        groupedActivities.map(([group, activies]) => (
          <Fragment key={group}>
            <Header sub color='teal'>
              {group}
            </Header>
            <Segment>
              <Item.Group divided>
                {activies.map(activity => (
                  <ActivityListItem key={activity.id} activity={activity}></ActivityListItem>
                ))}
              </Item.Group>
            </Segment>
          </Fragment>
        ))
      }
    </>
  )
}

export default observer(ActivityList);

import { Button, Form, Segment } from "semantic-ui-react"
import { ChangeEvent, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

const ActivityForm = () => {

  const {activityStore} = useStore();
  const {selectedActivity, createActivity, updateActivity, loading} = activityStore;

  const initialState = selectedActivity ?? {
    id: '',
    title: '',
    category: '',
    description: '',
    date: '',
    city: '',
    venue: ''
  }
  const [activity, setActivity] = useState(initialState);

  function handleSubmit() {
    activity.id ? updateActivity (activity) : createActivity(activity);
  }

  function handleInputChange (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    /*name and values are properties of event.target. event.target.value etc. so with {name, value}
     we just take these properties like a key value object*/
    const {name, value} = event.target;
    setActivity({...activity, [name]: value})
    //console.log("event: ",event);
    //console.log("target: ",event.target);
    //console.log("name and value pair: ",{[name]: value});
    //console.log("activity props: ",{...activity});
    //console.log("activity: ",activity);
    }

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input placeholder="Title" value={activity.title} name="title" onChange={handleInputChange}/>
        <Form.TextArea placeholder="Description" value={activity.description} name="description" onChange={handleInputChange}/>
        <Form.Input placeholder="Category" value={activity.category} name="category" onChange={handleInputChange}/>
        <Form.Input type='date' placeholder="Date" value={activity.date} name="date" onChange={handleInputChange}/>
        <Form.Input placeholder="City" value={activity.city} name="city" onChange={handleInputChange}/>
        <Form.Input placeholder="Venue" value={activity.venue} name="venue" onChange={handleInputChange}/>
        <Button loading={loading} floated="right" positive type="submit" content="Submit"></Button>
        <Button floated="right" type="button" content="Cancel"></Button>
      </Form>
    </Segment>
  )
}

export default observer(ActivityForm);

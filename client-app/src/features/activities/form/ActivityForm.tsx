import { Button, Form, Segment } from "semantic-ui-react"
import { ChangeEvent, useEffect, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useNavigate, useParams } from "react-router-dom";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { v4 as uuid } from 'uuid';

const ActivityForm = () => {

  const { activityStore } = useStore();
  const { createActivity, updateActivity, loading, loadingInitial, loadActivity } = activityStore;
  const { id } = useParams();
  const navigate = useNavigate();

  const [activity, setActivity] = useState({
    id: '',
    title: '',
    category: '',
    description: '',
    date: '',
    city: '',
    venue: ''
  })

  useEffect(() => {
    if (id) loadActivity(id).then(activity => setActivity(activity!))//Activity will always filled, ! with guaranteed
    },[id,loadActivity])

function handleSubmit() {
  if(!activity.id){
    activity.id = uuid();
    createActivity(activity).then(() => navigate(`/activities/${activity.id}`))
  }
  else{
    updateActivity(activity).then(() => navigate(`/activities/${activity.id}`))
  }
}

function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
  /*name and values are properties of event.target. event.target.value etc. so with {name, value}
   we just take these properties like a key value object*/
  const { name, value } = event.target;
  setActivity({ ...activity, [name]: value })
  //console.log("event: ",event);
  //console.log("target: ",event.target);
  //console.log("name and value pair: ",{[name]: value});
  //console.log("activity props: ",{...activity});
  //console.log("activity: ",activity);
}

if (loadingInitial) return <LoadingComponent content='Loading activity...'/>

return (
  <Segment clearing>
    <Form onSubmit={handleSubmit}>
      <Form.Input placeholder="Title" value={activity.title} name="title" onChange={handleInputChange} />
      <Form.TextArea placeholder="Description" value={activity.description} name="description" onChange={handleInputChange} />
      <Form.Input placeholder="Category" value={activity.category} name="category" onChange={handleInputChange} />
      <Form.Input type='date' placeholder="Date" value={activity.date} name="date" onChange={handleInputChange} />
      <Form.Input placeholder="City" value={activity.city} name="city" onChange={handleInputChange} />
      <Form.Input placeholder="Venue" value={activity.venue} name="venue" onChange={handleInputChange} />
      <Button loading={loading} floated="right" positive type="submit" content="Submit"></Button>
      <Button floated="right" type="button" content="Cancel"></Button>
    </Form>
  </Segment>
)
}

export default observer(ActivityForm);

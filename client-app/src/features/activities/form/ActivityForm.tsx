import { Button, Form, Segment } from "semantic-ui-react"
import { Activity } from "../../../app/models/activity";
import { ChangeEvent, useState } from "react";

interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
}

const ActivityForm = ({ activity: selectedActivity, closeForm }: Props) => {

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
    console.log(activity);
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
    }

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input placeholder="Title" value={activity.title} name="title" onChange={handleInputChange}/>
        <Form.TextArea placeholder="Description" value={activity.description} name="description" onChange={handleInputChange}/>
        <Form.Input placeholder="Category" value={activity.category} name="category" onChange={handleInputChange}/>
        <Form.Input placeholder="Date" value={activity.date} name="date" onChange={handleInputChange}/>
        <Form.Input placeholder="City" value={activity.city} name="city" onChange={handleInputChange}/>
        <Form.Input placeholder="Venue" value={activity.venue} name="venue" onChange={handleInputChange}/>
        <Button floated="right" positive type="submit" content="Submit"></Button>
        <Button onClick={closeForm} floated="right" type="button" content="Cancel"></Button>
      </Form>
    </Segment>
  )
}

export default ActivityForm

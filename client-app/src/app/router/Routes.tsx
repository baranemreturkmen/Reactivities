import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/activities/home/HomePage";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <App/>,
        children: [
            {path: '', element: <HomePage></HomePage>},
            {path: 'activities', element: <ActivityDashboard></ActivityDashboard>},
            {path: 'activities/:id', element: <ActivityDetails></ActivityDetails>},
            {path: 'createActivity', element: <ActivityForm></ActivityForm>},
            {path: 'manage/:id', element: <ActivityForm></ActivityForm>},
        ]
    }
]

export const router = createBrowserRouter(routes);
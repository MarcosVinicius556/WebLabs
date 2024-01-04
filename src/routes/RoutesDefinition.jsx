import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import RouteVerification from "./PrivateRoutes.jsx";
import Home from "../pages/Home";
import App from "../App";

const mainRouteDefinition = {
    path: '',
    element: <App />,
    children: [
        {path: '/', element: <Login />},
        {path: '/home', element: <RouteVerification> <Home /> </RouteVerification> }
    ]
}


const Routes = createBrowserRouter([
    mainRouteDefinition,
]);

export default Routes;
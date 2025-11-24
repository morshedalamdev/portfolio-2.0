import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/rootLayout";
import Home from "../pages/home";
import Contact from "../pages/contact";
import Project from "../pages/project";


const routes = createBrowserRouter([
     {
          path: '/',
          element: <RootLayout />,
          children: [
               { index: true, element: <Home /> },
               {
                    path: '/project/:projectID',
                    element: <Project />
               },
               {
                    path: '/contact',
                    element: <Contact />
               }
          ]
     }
])

export default routes;
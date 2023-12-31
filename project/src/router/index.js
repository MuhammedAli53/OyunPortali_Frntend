import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UserLayout from '../layouts/user-layout';
import HomePage from '../pages/home-page';
import GamesPage from '../pages/games-page';
import AboutPage from '../pages/about-page';
import KnightItemPage from '../pages/knight-item-page';
import KnightRingsPage from '../pages/knight-rings-page';
import ContactPage from '../pages/contact-page';


const router = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout />,
        children:[
           { index: true,
            element: <HomePage/>
        },
        {
            path: "games",
            element: <GamesPage /> 
        },
        {
        path: "knight-items",
        element: <KnightItemPage /> 
        }, 
        {
            path: "knight-rings",
            element: <KnightRingsPage />
        },
        {
        path: "about",
        element: <AboutPage /> 
        },
        {
            path:"contact",
            element: <ContactPage />
        }
        ]
    }
])

const AppRouter = () => {
  return (
        <RouterProvider  router={router}/>
    )
}

export default AppRouter;
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './Component/Contact/Contact';
import AboutUs from './Component/About/AboutUs';

import Home from './Component/Home/Home';
import Nav from './Component/Nav/Nav';
import First from './Component/First/First';
import Friends from './Component/Friends/Friends';
import FriendDetail from './Component/FriendDetail/FriendDetail';
import Posts from './Component/Posts/Posts';
import PostDetail from './Component/PostDetail/PostDetail';



// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<App></App>
//   },
//   {
//     path:'/about',
//     element:<AboutUs></AboutUs>

//   },
//   {
//     path:'/contact',
//     element:<Contact></Contact>

//   },
// ])

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<First></First>
      },
      {
        path:'/friends',
        element:<Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },

      {
        path:'friend/:friendId',
        element:<FriendDetail></FriendDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },

      {
        path:'posts',
        element:<Posts></Posts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')

      },
      {

          path:'post/:postId',
          element:<PostDetail></PostDetail>,
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)

      },

      {
        path:'about',
        element:<AboutUs></AboutUs>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      },
      {
        path:'*',
        element:<div>44444444444444444400000000000444444444</div>
        
        
      }
    ]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
{/* <Nav></Nav> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

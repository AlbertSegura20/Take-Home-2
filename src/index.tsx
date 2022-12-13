import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Form from "./components/FormAgent/Form";
import ViewAgent from "./components/ViewAgent/View";
import Agents from "./components/Agents/Agents";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/FormAgent",
        element: <Form/>
    },
    {
        path: "/ViewAgent",
        element: <ViewAgent/>
    }
])

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

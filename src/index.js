import React from 'react'
import ReactDOM from 'react-dom'
import CourseList from "./components/CourseList";
import UserList from "./components/UserList";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <div className="container-fluid">
    <UserList/>
  </div>,
  document.getElementById('root')
)
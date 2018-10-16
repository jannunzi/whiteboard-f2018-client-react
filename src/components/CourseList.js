import React, {Component} from 'react'

export default class CourseList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: []
    }
  }
  componentDidMount() {
    fetch("http://localhost:8080/api/course")
      .then(response=> response.json())
      .then(courses => this.setState({
        courses: courses
      }))
  }
  render() {
    return(
      <div>
        <h1>Course List</h1>
        <ul>
          {
            this.state.courses.map((course, idx) =>
              <li key={idx}>{course.title}</li>
            )
          }
        </ul>
      </div>
    )
  }
}
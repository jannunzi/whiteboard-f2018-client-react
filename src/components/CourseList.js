import React, {Component} from 'react'

export default class CourseList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: []
    }
  }
  componentDidMount() {
    fetch("http://localhost:8080/api/user/"+this.props.userId+"/course")
      .then(response=> response.json())
      .then(courses => this.setState({
        courses: courses
      }))
  }
  componentDidUpdate() {
    fetch("http://localhost:8080/api/user/"+this.props.userId+"/course")
      .then(response=> response.json())
      .then(courses => this.setState({
          courses: courses
        }))
  }
  render() {
    return(
      <div>
        <h2>Course List</h2>
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
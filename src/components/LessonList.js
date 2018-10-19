import React, {Component} from 'react'

export default class LessonList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lessons: []
    }
  }
  componentDidUpdate(prevProps) {
    if(prevProps.moduleId !== this.props.moduleId) {
      let url = "http://localhost:8080/api/user/"
      url += this.props.userId
      url += "/course/"
      url += this.props.courseId
      url += "/module/"
      url += this.props.moduleId
      url += "/lesson"
      fetch(url)
        .then(response => response.json())
        .then(lessons => this.setState({
          lessons: lessons
        }))
    }
  }
  render() {
    return(
      <div>
        <h2>Lessons</h2>
        <ul>
          {
            this.state.lessons.map((lesson, idx) =>
              <li key={idx}>
                {lesson.title} {lesson.id}
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}
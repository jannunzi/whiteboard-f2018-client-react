import React, {Component} from 'react'

export default class TopicList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topics: []
    }
  }
  componentDidUpdate(prevProps) {
    if(prevProps.lessonId !== this.props.lessonId) {
      let url = "http://localhost:8080/api/user/"
      url += this.props.userId
      url += "/course/"
      url += this.props.courseId
      url += "/module/"
      url += this.props.moduleId
      url += "/lesson/"
      url += this.props.lessonId
      url += "/topic"
      fetch(url)
        .then(response => response.json())
        .then(topics => this.setState({
          topics: topics
        }))
    }
  }
  render() {
    return(
      <div>
        <h2>Topics</h2>
        <ul>
          {
            this.state.topics.map((topic, idx) =>
              <li key={idx}>
                {topic.title} {topic.id}
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}
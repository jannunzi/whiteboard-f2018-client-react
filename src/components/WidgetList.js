import React, {Component} from 'react'

export default class WidgetList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      widgets: []
    }
  }
  componentDidUpdate(prevProps) {
    if(prevProps.topicId !== this.props.topicId) {
      let url = "http://localhost:8080/api/user/"
      url += this.props.userId
      url += "/course/"
      url += this.props.courseId
      url += "/module/"
      url += this.props.moduleId
      url += "/lesson/"
      url += this.props.lessonId
      url += "/topic/"
      url += this.props.topicId
      url += "/widget"
      fetch(url)
        .then(response => response.json())
        .then(widgets => this.setState({
          widgets: widgets
        }))
    }
  }
  render() {
    return(
      <div>
        <h2>Widgets</h2>  
        <ul>
          {
            this.props.widgets.map((widget, idx) =>
              <li key={idx}>
                {widget.title} {widget.id}
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}
import React, {Component} from 'react'

export default class WidgetList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      widgets: []
    }
  }
  componentDidUpdate(prevProps) {
    if(this.props.topicId != prevProps.topicId) {
      this.props.loadWidgets(
        this.props.userId,
        this.props.courseId,
        this.props.moduleId,
        this.props.lessonId,
        this.props.topicId
      )
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
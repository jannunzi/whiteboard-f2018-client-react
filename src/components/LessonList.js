import React, {Component} from 'react'

export default class LessonList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <h2>Lessons {this.props.forModule.title}</h2>
      </div>
    )
  }
}
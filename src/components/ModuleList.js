import React, {Component} from  'react'

export default class ModuleList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modules: []
    }
  }
  componentDidUpdate() {
    fetch("http://localhost:8080/api/course/" + this.props.courseId + "/module")
      .then(response => response.json())
      .then(modules => this.setState({
        modules: modules
      }))
  }
  render() {
    return(
      <div>
        <h2>Modules</h2>
        {this.props.courseId}
      </div>
    )
  }
}
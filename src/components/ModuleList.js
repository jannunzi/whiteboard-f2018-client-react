import React, {Component} from  'react'

export default class ModuleList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modules: []
    }
  }
  componentDidUpdate(prevPros) {
    if(prevPros.courseId != this.props.courseId) {
      fetch("http://localhost:8080/api/course/" + this.props.courseId + "/module")
        .then(response => response.json())
        .then(modules => this.setState({
          modules: modules
        }))
    }
  }
  render() {
    return(
      <div>
        <h2>Modules</h2>
        <ul>
        {
          this.state.modules.map((module, idx) =>
            <li key={idx}>
              {module.title} {module.id}
            </li>
          )
        }
        </ul>
      </div>
    )
  }
}
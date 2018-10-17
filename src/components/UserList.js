import React, {Component} from 'react'

export default class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    fetch("http://localhost:8080/api/user")
      .then(response => response.json())
      .then(users => this.setState({
        users: users
      }))
  }
  render() {
    return(
      <ul>
        {
          this.state.users.map((user, idx) =>
            <li key={idx}>
              {user.username}
            </li>
          )
        }
      </ul>
    )
  }
}
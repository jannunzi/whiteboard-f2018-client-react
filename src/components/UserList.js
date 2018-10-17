import React, {Component} from 'react'

export default class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      selectedUser: {}
    }
  }
  selectUser = user =>
    this.setState({
      selectedUser: user
    })
  componentDidMount() {
    fetch("http://localhost:8080/api/user")
      .then(response => response.json())
      .then(users => this.setState({
        users: users
      }))
  }
  render() {
    return(
      <div>
        <h2>Users</h2>
        <ul>
          {
            this.state.users.map((user, idx) =>
              <li onClick={() => this.selectUser(user)} key={idx}>
                {user.username}
              </li>
            )
          }
        </ul>
        <h3>{this.state.selectedUser ? this.state.selectedUser.username:''}</h3>
      </div>
    )
  }
}
import React from 'react';
class Item extends React.Component {
  render() {
    return (
      <li>{this.props.name}, {this.props.price}</li>
    );
  }
}

class User extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.userName}</td>
        <td>{this.props.email}</td>
        <td>{this.props.phone}</td>
        <td>Edit || Delete</td>
      </tr>

    );
  }
}
class App extends React.Component {
  state = {
    items: [
      { id: 1, name: 'Apple', price: '120' },
      { id: 2, name: 'Orange', price: '100' },
      { id: 3, name: 'Wai Wai Hnin', price: 'My life' }
    ],
    users: [
    ]
  }


  //For products
  nameRef = React.createRef();
  priceRef = React.createRef();

  //for users
  userNameRef = React.createRef();
  emailRef = React.createRef();
  phoneRef = React.createRef();


  add = () => {
    let id = this.state.items.length + 1;
    let name = this.nameRef.current.value;
    let price = this.priceRef.current.value;
    this.setState({
      items: [
        ...this.state.items,
        { id, name, price }
      ]
    });
  }

  addUser = () => {
    let id = this.state.users.length + 1;
    let userName = this.userNameRef.current.value;
    let email = this.emailRef.current.value;
    let phone = this.phoneRef.current.value;
    this.setState({
      users: [
        ...this.state.users,
        { id, userName, email, phone }
      ]
    })
  }


  render() {
    return (
      <div>
        <h1>Product Lists</h1>
        <ul>
          {this.state.items.map(i => {
            return (
              <Item
                key={i.id}
                name={i.name}
                price={i.price}
              />
            )
          })
          }
        </ul>
        <input type="text" ref={this.nameRef} placeholder='Name' /><br />
        <input type="text" ref={this.priceRef} placeholder='Price' /> <br />
        <button onClick={this.add}>Add</button>
        <hr></hr>
        <h1>User Lists</h1>
        <table border="1">
          <tr>
            <td><input type="text" ref={this.userNameRef} placeholder='User Name' /></td>
            <td><input type="text" ref={this.emailRef} placeholder='User email' /></td>
            <td><input type="text" ref={this.phoneRef} placeholder='User Phone' /></td>
            <td><button onClick={this.addUser}>Add User</button></td>
          </tr>
          <tr>
            <th>User Name</th>
            <th>User email</th>
            <th>User phone</th>
            <th>Action</th>
          </tr>
         
            {this.state.users.map(i => {
              return (
                <User
                  key={i.id}
                  userName={i.userName}
                  email={i.email}
                  phone={i.phone}
                />
              )
            })
            }
          

        </table>
      </div>

    );
  }
}
export default App;
import React from 'react';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  headleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    var url = `http://123.249.16.84:8880/demo/login/loginByEmail?email=${email}&password=${password}`;
    //发起get请求
    var promise = fetch(url).then(function(response) {

    if(response.status === 200) {
        return response.json();
    }else {
        return {}
    }
    });
    
    promise.then(function(data) {
    //响应的内容
        console.log(data);
    }).catch(function(err){
        console.log(err);
    })

  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type="text" value={this.state.email} onChange={this.headleEmailChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
          </label>
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default LoginPage;
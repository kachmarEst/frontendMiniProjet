import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
class Login extends React.Component {
constructor(props){
  super(props);

}



  render() {

    return(
        <form className="container" onSubmit={this.props.sub}>
            <h1>S'identifier </h1>
        <div className="form-group">
          <label >Username</label>
          <input type="text" className="form-control" name="username" onChange={this.props.changing}  placeholder="Entrer Username" />
        </div>
        <div className="form-group">
          <label >Password</label>
          <input type="password" className="form-control"  name="password" onChange={this.props.changing}  placeholder="Entrer Password" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    );
  }
}


export default Login;

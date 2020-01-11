import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class ListingA extends React.Component {
constructor(props){
  super(props);
  
}




  render() {

    return(
     <tr>
  <td>{this.props.obj.username}</td>
        
        <td>{this.props.obj.createdAt}</td>
        <td><Link to={"/admins/modifier/"+this.props.obj._id} className="btn btn-primary">Modifier</Link> &nbsp; <button className="btn btn-danger" onClick={() => this.props.del(this.props.obj._id)}>Supprimer</button></td>

      </tr>
    );
  }
}


export default ListingA;

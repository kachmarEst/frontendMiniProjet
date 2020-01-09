import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class Listing extends React.Component {
constructor(props){
  super(props);
  
}




  render() {

    return(
     <tr>
        <td>{this.props.etuds.prenom}</td>
        <td>{this.props.etuds.nom}</td>
        <td>{this.props.mats.nom}</td>
        <td>{this.props.obj.note}</td>
        <td>{this.props.obj.createdAt}</td>
        <td><Link to={"/notes/modifier/"+this.props.obj._id} className="btn btn-primary">Modifier</Link> &nbsp; <button className="btn btn-danger" onClick={() => this.props.del(this.props.obj._id)}>Supprimer</button></td>

      </tr>
    );
  }
}


export default Listing;

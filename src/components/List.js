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
  <td>{this.props.obj.prenom}</td>
        <td>{this.props.obj.nom}</td>
        <td>{this.props.obj.cne}</td>
        <td>{this.props.obj.filiere}</td>
        <td>{this.props.obj.createdAt}</td>
        <td><Link className="btn btn-success" to={"/etudiant/notes/"+this.props.obj._id}>Notes</Link> &nbsp; <Link to={"/etudiants/modifier/"+this.props.obj._id} className="btn btn-primary">Modifier</Link> &nbsp; <button className="btn btn-danger" onClick={() => this.props.del(this.props.obj._id)}>Supprimer</button></td>

      </tr>
    );
  }
}


export default Listing;

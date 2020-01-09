import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios'
class Navbar extends React.Component {
constructor(props){
  super(props);

}




  render() {

    return(
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to="/">GDN</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Gestion des notes<span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/matieres/ajouter">ajouter des Matieres</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/matieres">List des Matieres</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/notes/ajouter">ajouter des Notes</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/etudiants/ajouter">ajouter des Etudiants</Link>
      </li>

     
      
    </ul>
  
  </div>
</nav>

    );
  }
}


export default Navbar;

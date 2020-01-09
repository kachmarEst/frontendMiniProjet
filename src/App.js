import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios'
import EtudiantList from './pages/Etudiants/EtudiantList';
import AjouterEtudiant from './pages/Etudiants/AjouterEtudiant';
import EditerEtudiant from './pages/Etudiants/EditerEtudiant';
import MatieresList from './pages/Matieres/MatiereList';
import EditerMatiere from './pages/Matieres/EditerMatiere';
import AjouterMatiere from './pages/Matieres/AjouterMatiere';
import EditerNote from './pages/Notes/EditerNote';
import AjouterNote from './pages/Notes/AjouterNote';
import GestionNotes from './pages/Notes/gestionNotes';

class App extends React.Component {
constructor(props){
  super(props);
}




  render() {

    return(
<div className="container-fluid">
     
           <Router>
               <Navbar  />

           <Switch>
           <Route exact path='/notes/ajouter' component={AjouterNote} />
           <Route exact path='/notes/modifier/:id' component={EditerNote} />
             <Route exact path='/' component={EtudiantList} />
             <Route exact path='/etudiants/ajouter' component={AjouterEtudiant} />
             <Route exact path='/etudiants/modifier/:id' component={EditerEtudiant} />
             <Route exact path='/matieres' component={MatieresList} />
             <Route exact path='/matieres/ajouter' component={AjouterMatiere} />
             <Route exact path='/matieres/modifier/:id' component={EditerMatiere} />
             <Route exact path='/etudiant/notes/:id' component={GestionNotes} />

             </Switch>
       
          
            </Router>
          
      
      
    

      </div>

    );
  }
}


export default App;

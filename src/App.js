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
import Login from './components/login';
import Dashboard from './pages/Admins/dashboard';
import AjouterAdmin from './pages/Admins/AjouterAdmin';
import EditerAdmin from './pages/Admins/EditerAdmin';
import AdminList from './pages/Admins/AdminList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      username:'',
      password:'',
      message:'',
      logged:false
  }
  }

  logout= ()=>{
    localStorage.removeItem('loggedIn');
    localStorage.clear();
    this.setState({
      logged:false
    })
  }
    
  onChangeState=(e)=>{
    if(e.target.name == "username"){ 
        this.setState({
            username: e.target.value
        })
    }else if(e.target.name == "password"){
        this.setState({
            password: e.target.value
        })
    }
    }
    componentDidMount(){
      const loggedIn = localStorage.getItem('loggedIn');
      if(loggedIn){
        this.setState({
          logged:true
        })
      }else{
        this.setState({
          logged:false
        })
      }
    }
    OnSubmit=(e)=>{
        e.preventDefault();
        const headers={
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
       const credentials={
        username:this.state.username?this.state.username:'',
        password:this.state.password?this.state.password:''
        }
    
        axios.post('//localhost:8000/admins/login',credentials,{headers:headers})
        .then(res =>{
    
            if(res.status === 200 && res.data.success === true){
                localStorage.setItem('loggedIn', res.data.success);
                this.setState({
                  logged:true
                })
            }
        })
        .catch( err =>{
                  console.log(err);
        });
    }

  render() {
    return (


      
      <div className="container-fluid">
        { !this.state.logged ? <Login changing={this.onChangeState} sub={this.OnSubmit}  />:
           
        <Router>
          <Navbar logout={this.logout} />

          <Switch>
          <Route exact path='/' component={Dashboard} />

            <Route exact path='/notes/ajouter' component={AjouterNote} />
            <Route exact path='/notes/modifier/:id' component={EditerNote} />
            <Route exact path='/etudiants' component={EtudiantList} />
            <Route exact path='/etudiants/ajouter' component={AjouterEtudiant} />
            <Route exact path='/etudiants/modifier/:id' component={EditerEtudiant} />
            <Route exact path='/matieres' component={MatieresList} />
            <Route exact path='/matieres/ajouter' component={AjouterMatiere} />
            <Route exact path='/matieres/modifier/:id' component={EditerMatiere} />
            <Route exact path='/admins' component={AdminList} />
            <Route exact path='/admins/modifier/:id' component={EditerAdmin} />
            <Route exact path='/admins/ajouter' component={AjouterAdmin} />
            <Route exact path='/etudiant/notes/:id' component={GestionNotes} />


          </Switch>
        </Router>
 

}

      </div>

    );
  }
}


export default App;

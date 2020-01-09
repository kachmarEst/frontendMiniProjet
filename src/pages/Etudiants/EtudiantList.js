import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import Listing from '../../components/List';
class EtudiantList extends React.Component {
constructor(props){
  super(props);
    this.state = {
        etudiants:[]
    }
}


Etudiants =()=>{
    const headers={
        'Content-Type':'application/json',
        'Accept':'application/json'
    }
    axios.get('//localhost:8000/etudiants',{headers:headers})
    .then( res=>{
        this.setState({
            etudiants:res.data
        })
    })
    .catch(err=>{
        console.log(err.response);
    });
}
componentDidMount(){
  this.Etudiants();
}

Delete = (id)=>{
    const headers={
        'Content-Type':'application/json',
        'Accept':'application/json'
    }
    axios.delete('//localhost:8000/etudiants/'+id,{headers:headers})
    .then( res=>{
        this.Etudiants();
    })
    .catch(err=>{
        console.log(err.response);
    });
}

List = ()=>{

    if(this.state.etudiants){
        return this.state.etudiants.map((etudiant,i)=><Listing key={i} obj={etudiant} del={this.Delete}/>)
    }
}


  render() {

    return(
<div className="container">
     
<table class="table table-striped">
  <thead>
    <tr>     
         <th scope="col">Prenom</th>
      <th scope="col">Nom</th>
      <th scope="col">CNE</th>
      <th scope="col">Filiere</th>
      <th scope="col">Date de Creation</th>
    </tr>
  </thead>
  <tbody>
   
 {this.List()}
  </tbody>
</table>
      
      
    

      </div>

    );
  }
}


export default EtudiantList;

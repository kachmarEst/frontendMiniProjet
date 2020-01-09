import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import ListingN from '../../components/ListN';
class GestionNotes extends React.Component {
constructor(props){
  super(props);
    this.state = {
        matieres:[],
        notes:[],
        etudiants:[]
    }
}


Notes =()=>{
    const headers={
        'Content-Type':'application/json',
        'Accept':'application/json'
    }
    axios.get('//localhost:8000/notes/all/'+this.props.match.params.id,{headers:headers})
    .then( res=>{
        this.setState({
            notes:res.data
        })
    })
    .catch(err=>{
        console.log(err.response);
    });
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

Matieres =()=>{
    const headers={
        'Content-Type':'application/json',
        'Accept':'application/json'
    }
    axios.get('//localhost:8000/matieres',{headers:headers})
    .then( res=>{
        this.setState({
            matieres:res.data
        })
    })
    .catch(err=>{
        console.log(err.response);
    });
}
componentDidMount(){
  this.Etudiants();
  this.Matieres();
  this.Notes();
}

Delete = (id)=>{
    const headers={
        'Content-Type':'application/json',
        'Accept':'application/json'
    }
    axios.delete('//localhost:8000/notes/'+id,{headers:headers})
    .then( res=>{
        this.Notes();
    })
    .catch(err=>{
        console.log(err.response);
    });
}

List = ()=>{

    if(this.state.notes && this.state.matieres && this.state.etudiants){
        return this.state.notes.map((note,i)=>{
        let mats = this.state.matieres.find((matiere)=> matiere._id == note.matiere_id);
        let etuds = this.state.etudiants.find((etudiant)=> etudiant._id == note.etudiant_id);
                if(mats && etuds){
                    return(<ListingN key={i} obj={note} mats={mats} etuds={etuds} del={this.Delete}/>);
                }else{
                    return '';
                }
     })
    }else{
        return '';
    }
}


  render() {

    return(
<div className="container">
     
<table class="table table-striped">
  <thead>
    <tr>     
      <th scope="col">Nom</th>
      <th scope="col">Prenom</th>
      <th scope="col">Matiere</th>
      <th scope="col">Note</th>
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


export default GestionNotes;

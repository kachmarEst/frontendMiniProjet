import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
class EditerNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            etudiant_id: '',
            matiere_id: '',
            nom:'',
            prenom:'',
            name:'',
            note: '',
            etc:'',
            mtc:'',
            etudiants:[],
            matieres:[]
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
Note =()=>{
    const headers={
        'Content-Type':'application/json',
        'Accept':'application/json'
    }
    axios.get('//localhost:8000/notes/'+this.props.match.params.id,{headers:headers})
    .then( res=>{
        this.setState({
            etudiant_id:res.data.notes.etudiant_id,
            etc:res.data.notes.etudiant_id,
            matiere_id:res.data.notes.matiere_id,
            mtc:res.data.notes.matiere_id,
            note:res.data.notes.note,
            prenom:res.data.etudiant.prenom,
            nom:res.data.etudiant.nom,
            name:res.data.matiere.nom

        })
    })
    .catch(err=>{
        console.log(err.response);
    });
}
componentDidMount(){
  this.Etudiants();
  this.Matieres();
  this.Note();
}

    modifier = (e) => {
        e.preventDefault();
        const headers={
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
        const donnees={
            note:this.state.note,
            matiere_id:this.state.matiere_id,
            etudiant_id:this.state.etudiant_id
        }
        axios.post('//localhost:8000/notes/modifier/'+this.props.match.params.id,donnees,{headers:headers})
        .then( res=>{
            console.log(res.data);  
            this.props.history.push('/etudiant/notes/'+this.state.etudiant_id);
              })
        .catch(err=>{
            console.log(err.response);
        });

    }

    changeStateEt= (e)=>{
            this.setState({
                etudiant_id:e.target.value
            })
    }

    changeStateMat= (e)=>{
        this.setState({
            matiere_id:e.target.value
        })
}
changeStateNote= (e)=>{
    this.setState({
        note:e.target.value
    })
}

    render() {

        let optionsMatieres = this.state.matieres.filter((mat)=>  mat._id != this.state.mtc).map((data) =>
        <option 
            key={data._id}
            value={data._id}
        >
            {data.nom}
        </option>
    );
    
    
    let optionsEtudiants = this.state.etudiants.filter((etu)=>  etu._id != this.state.etc).map((data) =>
    <option 
        key={data._id}
        value={data._id}
    >
        {data.nom}  {data.prenom} 
    </option>
    );

        return (
            <div className="container">

                <form onSubmit={this.modifier}>
                    <div className="form-group">
                        <label>Etudiant</label>
                        <select type="text" className="form-control" onChange={this.changeStateEt} >
                        <option value={this.state.etudiant_id} >{this.state.nom} {this.state.prenom}</option>
                    {optionsEtudiants}
                    </select>       
                   </div>
                    <div className="form-group">
                        <label>Matiere</label>
                        <select type="text" className="form-control" onChange={this.changeStateMat}>
                        <option value={this.state.matiere_id} >{this.state.name}</option>
                    {optionsMatieres}
                    </select>                    </div>
                    <div className="form-group">
                        <label>Note</label>
                        <input type="text" class="form-control" onChange={this.changeStateNote} value={this.state.note} name="note" placeholder="Note" />
                    </div>
                   

                    <button className="btn btn-primary">Ajouter</button>
                </form>

            </div>

        );
    }
}


export default EditerNote;

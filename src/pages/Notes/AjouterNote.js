import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
class AjouterNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            etudiant_id: '',
            matiere_id: '',
            note: '',
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
componentDidMount(){
  this.Etudiants();
  this.Matieres();
}

    Ajouter = (e) => {
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
        axios.post('//localhost:8000/notes/ajouter',donnees,{headers:headers})
        .then( res=>{
            console.log(res.data);  
            this.props.history.push('/etudiants');
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

        let optionsMatieres = this.state.matieres.map((data) =>
        <option 
            key={data._id}
            value={data._id}
        >
            {data.nom}
        </option>
    );
    
    
    let optionsEtudiants = this.state.etudiants.map((data) =>
    <option 
        key={data._id}
        value={data._id}
    >
        {data.nom}  {data.prenom} 
    </option>
    );

        return (
            <div className="container">

                <form onSubmit={this.Ajouter}>
                    <div className="form-group">
                        <label>Etudiant</label>
                        <select type="text" className="form-control" onChange={this.changeStateEt} name="prof_id">
                    <option>choisi un etudiant</option>
                    {optionsEtudiants}
                    </select>       
                   </div>
                    <div className="form-group">
                        <label>Matiere</label>
                        <select type="text" className="form-control" onChange={this.changeStateMat} name="prof_id">
                    <option>choisi une matiere</option>
                    {optionsMatieres}
                    </select>                    </div>
                    <div className="form-group">
                        <label>Note</label>
                        <input type="text" class="form-control" onChange={this.changeStateNote} name="note" placeholder="Note" />
                    </div>
                   

                    <button className="btn btn-primary">Ajouter</button>
                </form>

            </div>

        );
    }
}


export default AjouterNote;

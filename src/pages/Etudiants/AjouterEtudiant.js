import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
class AjouterEtudiant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cne: '',
            nom: '',
            prenom: '',
            filiere: ''
        }
    }

    Ajouter = (e) => {
        e.preventDefault();
        const headers={
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
        const donnees={
            cne:this.state.cne,
            nom:this.state.nom,
            prenom:this.state.prenom,
            filiere:this.state.filiere
        }
        axios.post('//localhost:8000/etudiants/ajouter',donnees,{headers:headers})
        .then( res=>{
            console.log(res.data);  
            this.props.history.push('/etudiants');
              })
        .catch(err=>{
            console.log(err.response);
        });

    }

    changeState= (e)=>{
        if(e.target.name=="pre"){
            this.setState({
                prenom:e.target.value
            })
        }else if (e.target.name=="nom"){
            this.setState({
                nom:e.target.value
            })
        }else if (e.target.name=="cne"){
            this.setState({
                cne:e.target.value
            })
        }else if (e.target.name=="fil"){
            this.setState({
                filiere:e.target.value
            })
        }
    }


    render() {

        return (
            <div className="container">

                <form onSubmit={this.Ajouter}>
                    <div className="form-group">
                        <label>Prenom</label>
                        <input type="text" class="form-control" onChange={this.changeState} name="pre" placeholder="Prenom" />
                    </div>
                    <div className="form-group">
                        <label>Nom</label>
                        <input type="text" class="form-control" onChange={this.changeState} name="nom" placeholder="Nom" />
                    </div>
                    <div className="form-group">
                        <label>CNE</label>
                        <input type="text" class="form-control" onChange={this.changeState} name="cne" placeholder="CNE" />
                    </div>
                    <div className="form-group">
                        <label>Filiere</label>
                        <input type="text" class="form-control" onChange={this.changeState} name="fil" placeholder="Filiere" />
                    </div>

                    <button className="btn btn-primary">Submit</button>
                </form>

            </div>

        );
    }
}


export default AjouterEtudiant;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
class EditerEtudiant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cne: '',
            nom: '',
            prenom: '',
            filiere: ''
        }
    }

    Etudiant =()=>{
        const headers={
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
        axios.get('//localhost:8000/etudiants/'+this.props.match.params.id,{headers:headers})
        .then( res=>{
         this.setState({
                    cne: res.data.cne,
                    nom: res.data.nom,
                    prenom: res.data.prenom,
                    filiere: res.data.filiere
              })     
         })
        .catch(err=>{
            console.log(err.response);
        });
    }
componentDidMount(){
    this.Etudiant();
}
    Modifier = (e) => {
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
        axios.post('//localhost:8000/etudiants/modifier/'+this.props.match.params.id,donnees,{headers:headers})
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

                <form onSubmit={this.Modifier}>
                    <div className="form-group">
                        <label>Prenom</label>
                        <input type="text" class="form-control" onChange={this.changeState} value={this.state.prenom} name="pre" placeholder="Prenom" />
                    </div>
                    <div className="form-group">
                        <label>Nom</label>
                        <input type="text" class="form-control" onChange={this.changeState} value={this.state.nom} name="nom" placeholder="Nom" />
                    </div>
                    <div className="form-group">
                        <label>CNE</label>
                        <input type="text" class="form-control" onChange={this.changeState} value={this.state.cne} name="cne" placeholder="CNE" />
                    </div>
                    <div className="form-group">
                        <label>Filiere</label>
                        <input type="text" class="form-control" onChange={this.changeState} value={this.state.filiere} name="fil" placeholder="Filiere" />
                    </div>

                    <button className="btn btn-primary">Submit</button>
                </form>

            </div>

        );
    }
}


export default EditerEtudiant;

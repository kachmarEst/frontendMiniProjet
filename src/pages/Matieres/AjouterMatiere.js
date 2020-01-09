import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
class AjouterMatiere extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: ''
        }
    }

    Ajouter = (e) => {
        e.preventDefault();
        const headers={
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
        const donnees={
            nom:this.state.nom
        }
        axios.post('//localhost:8000/matieres/ajouter',donnees,{headers:headers})
        .then( res=>{
            console.log(res.data);  
            this.props.history.push('/matieres');
              })
        .catch(err=>{
            console.log(err.response);
        });

    }

    changeState= (e)=>{
            this.setState({
                nom:e.target.value
            })
        
    }


    render() {

        return (
            <div className="container">

                <form onSubmit={this.Ajouter}>
                   
                    <div className="form-group">
                        <label>Nom</label>
                        <input type="text" class="form-control" onChange={this.changeState} name="nom" placeholder="Nom" />
                    </div>
                

                    <button className="btn btn-primary">Submit</button>
                </form>

            </div>

        );
    }
}


export default AjouterMatiere;

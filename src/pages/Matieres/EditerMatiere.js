import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
class EditerMatiere extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: ''
        }
    }

    Matiere =()=>{
        const headers={
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
        axios.get('//localhost:8000/matieres/'+this.props.match.params.id,{headers:headers})
        .then( res=>{
         this.setState({
                    nom: res.data.nom
              })     
         })
        .catch(err=>{
            console.log(err.response);
        });
    }
componentDidMount(){
    this.Matiere();
}
    Modifier = (e) => {
        e.preventDefault();
        const headers={
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
        const donnees={
            nom:this.state.nom
        }
        axios.post('//localhost:8000/matieres/modifier/'+this.props.match.params.id,donnees,{headers:headers})
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

                <form onSubmit={this.Modifier}>
                   
                    <div className="form-group">
                        <label>Nom</label>
                        <input type="text" class="form-control" onChange={this.changeState} value={this.state.nom} name="nom" placeholder="Nom" />
                    </div>
                

                    <button className="btn btn-primary">Submit</button>
                </form>

            </div>

        );
    }
}


export default EditerMatiere;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
class AjouterAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            username: ''
        }
    }

    Ajouter = (e) => {
        e.preventDefault();
        const headers={
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
        const donnees={
            password:this.state.password,
            username:this.state.username
        }
        axios.post('//localhost:8000/admins/ajouter',donnees,{headers:headers})
        .then( res=>{
            console.log(res.data);  
            this.props.history.push('/admins');
              })
        .catch(err=>{
            console.log(err.response);
        });

    }

    changeState= (e)=>{
        if(e.target.name=="username"){
            this.setState({
                username:e.target.value
            })
        }else if (e.target.name=="password"){
            this.setState({
                password:e.target.value
            })
        }
    }


    render() {

        return (
            <div className="container">

                <form onSubmit={this.Ajouter}>
                    <div className="form-group">
                        <label>username</label>
                        <input type="text" class="form-control" onChange={this.changeState} name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label>password</label>
                        <input type="password" class="form-control" onChange={this.changeState} name="password" placeholder="password" />
                    </div>
              

                    <button className="btn btn-primary">Submit</button>
                </form>

            </div>

        );
    }
}


export default AjouterAdmin;

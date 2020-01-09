import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import ListingM from '../../components/ListM';
class MatieresList extends React.Component {
constructor(props){
  super(props);
    this.state = {
        matieres:[]
    }
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
  this.Matieres();
}

Delete = (id)=>{
    const headers={
        'Content-Type':'application/json',
        'Accept':'application/json'
    }
    axios.delete('//localhost:8000/matieres/'+id,{headers:headers})
    .then( res=>{
        this.Matieres();
    })
    .catch(err=>{
        console.log(err.response);
    });
}

List = ()=>{

    if(this.state.matieres){
        return this.state.matieres.map((matiere,i)=><ListingM key={i} obj={matiere} del={this.Delete}/>)
    }
}


  render() {

    return(
<div className="container">
     
<table class="table table-striped">
  <thead>
    <tr>     
      <th scope="col">Nom</th>
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


export default MatieresList;

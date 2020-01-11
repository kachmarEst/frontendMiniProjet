import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import Listing from '../../components/List';
import ListingA from '../../components/ListA';
class AdminList extends React.Component {
constructor(props){
  super(props);
    this.state = {
        admins:[]
    }
}


Admins =()=>{
    const headers={
        'Content-Type':'application/json',
        'Accept':'application/json'
    }
    axios.get('//localhost:8000/admins',{headers:headers})
    .then( res=>{
        this.setState({
            admins:res.data
        })
    })
    .catch(err=>{
        console.log(err.response);
    });
}
componentDidMount(){
  this.Admins();
}

Delete = (id)=>{
    const headers={
        'Content-Type':'application/json',
        'Accept':'application/json'
    }
    axios.delete('//localhost:8000/admins/'+id,{headers:headers})
    .then( res=>{
        this.Admins();
    })
    .catch(err=>{
        console.log(err.response);
    });
}

List = ()=>{

    if(this.state.admins){
        return this.state.admins.map((admin,i)=><ListingA key={i} obj={admin} del={this.Delete}/>)
    }
}


  render() {

    return(
<div className="container">
     
<table class="table table-striped">
  <thead>
    <tr>     
      <th scope="col">username</th>
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


export default AdminList;

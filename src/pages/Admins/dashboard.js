import React from 'react';
import image from '../../images/este.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className="container-fluid">

<h1>Bienvenu chez ESTE</h1>
<img src={image} />


      </div>

    );
  }
}


export default Dashboard;

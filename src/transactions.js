import React, { Component } from 'react';
import App from './App';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/metisMenu/metisMenu.min.css';
import './dist/css/sb-admin-2.css';
import './vendor/morrisjs/morris.css';
import './vendor/font-awesome/css/font-awesome.min.css';


class Transactions extends Component {
  render() {

    return (
        <div data-id="wrapper">

        <App/>

      </div>
    );
  }
}

ReactDOM.render(<Transactions />, document.getElementById('tables-container'));


export default Transactions;

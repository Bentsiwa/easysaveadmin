import React, { Component } from 'react';
import DashboardCards from './dashboardcards';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/metisMenu/metisMenu.min.css';
import './dist/css/sb-admin-2.css';
import './vendor/morrisjs/morris.css';
import './vendor/font-awesome/css/font-awesome.min.css';


class App extends Component {
  render() {
    var navStyle = {
        margin: 0
     }
    return (
        <div data-id="wrapper">

        <nav className="navbar navbar-default navbar-static-top"  data-role="navigation" style={navStyle}>
            <div className="navbar-header">
                <button type="button" className="navbar-toggle"  data-data-toggle="collapse"  data-data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand"  data-href="index.html">EasySave</a>
            </div>
            <div className="navbar-default sidebar" data-role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <ul className="nav" data-id="side-menu">
                        <li className="sidebar-search">
                            <div className="input-group custom-search-form">
                                <input data-type="text" className="form-control" data-placeholder="Search..."/>
                                <span className="input-group-btn">
                                <button className="btn btn-default" data-type="button">
                                    <i className="fa fa-search"></i>
                                </button>
                            </span>
                            </div>

                        </li>
                        <li>
                            <a data-href="index.html"><i className="fa fa-dashboard fa-fw"></i> Dashboard</a>
                        </li>

                        <li>
                            <a data-href="transactions.html"><i className="fa fa-table fa-fw"></i> Transactions</a>
                        </li>
                        <li>
                            <a data-href="users.html"><i className="fa fa-edit fa-fw"></i> Users</a>
                        </li>
                        <li>
                            <a data-href="comments.html"><i className="fa fa-edit fa-fw"></i> Comments</a>
                        </li>
                        <li>
                            <a data-href="reconciliation.html"><i className="fa fa-bar-chart-o  fa-fw"></i> Reconciliation</a>

                        </li>
                    </ul>
                </div>

            </div>

        </nav>
        <DashboardCards/>

      </div>
    );
  }
}




export default App;

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import Create from './Create';

class Header extends Component {
  	render() {
    	return (
    		<Router>
			  	<div>
				  	<nav className="navbar navbar-default">
				  		<div className="container-fluid">
				  			<div className="navbar-header">
				  				<Link className="navbar-brand" to="/list">Home</Link>
				  			</div>
				  		</div>
				    </nav>
				    <div className="container-fluid">
				    	<Route path="/list" component={Home}/>
				      	<Route path="/create" component={Create}/>
				    </div>
			    </div>
			  </Router>
    	);
	}
}

export default Header;

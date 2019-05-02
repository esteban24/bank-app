import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import Create from './Create';
import Show from './Show';

class Header extends Component {
  	render() {
    	return (
    		<Router>
			  	<div>
				  	<nav className="navbar navbar-default">
				  		<div className="container-fluid">
				  			<div className="navbar-header">
				  				<Link className="navbar-brand" to="/charges">Home</Link>
				  			</div>
				  		</div>
				    </nav>
				    <div className="container-fluid">
				    	<Route exact path="/charges" component={Home}/>
				      	<Route exact path="/charges/new" component={Create}/>
				      	<Route exact path="/charges/show/:chargeId" component={Show} />
				    </div>
			    </div>
			  </Router>
    	);
	}
}

export default Header;

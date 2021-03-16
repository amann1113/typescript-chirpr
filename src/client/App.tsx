import * as React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/addChirp'
import Admin from './components/Admin';


export default class App extends React.Component {

	render() {
		return (
			<main>
				<BrowserRouter>

				<section className="header">
					<div className="jumbotron-primary jumbotron-fluid header">
						<div className="container text-center">
						
							<h1 className="display-4 align-middle">Chirper</h1>
							
						</div>
						<br />
					</div>
					<Link className="link" to="/">Home</Link>
					<Link className="link" to="/add">Add Chirp</Link>
				</section>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/add" component={Add} />
						<Route exact path="/admin/:id" component={Admin} />
					</Switch>
				</BrowserRouter>
			</main>

		);
	}
}


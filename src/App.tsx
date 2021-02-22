import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Login} from "./Login";
import {Main} from "./Main";

export default function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/login">
						<Login/>
					</Route>
					<Route path="/main">
						<Main/>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

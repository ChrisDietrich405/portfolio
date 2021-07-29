import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "./pages/Home"

import Portfolio from "./pages/Projects"

import AboutMe from "./pages/AboutMe"

import Navbar from "./components/Navbar"





function App() {

	return (

		<Router>

			<Navbar/>

			<Switch>

				<Route path="/" exact={true} component={Home}/>

				<Route path="/portfolio" component={Portfolio}/>

				<Route path="/about" exact={true} component={AboutMe}/>

			</Switch>

		</Router>

	)

}



export default App


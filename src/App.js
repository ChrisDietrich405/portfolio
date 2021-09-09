//add testimonials?|
//change the color of the header to black 00000000 with no hr
//move the title up a little 
//add box shadow to the cards 
//the height of the cards should be the same 
//projects should have a gray tone and get rid of the hr's
//left align cards (everything in the card) in projects section
//but make the github button have a long width 
//make the github a button 
//for the EIE change the border to the same gray color, but don't add the box-shadow and do
//have the same border radius 
// change the color of the arrow when it reaches the footer (to white)
//add more of a margin to both sides so that the arrow passes them cleanly
//take a new pic of the CGSHop
//make my picture black and white 

//https://dribbble.com/shots/16199327-Gilb-Personal-Website-Portfolio
//for the footer email, linkedin everything left aligned 


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


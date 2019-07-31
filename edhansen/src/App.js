import React from 'react'; 
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from './components/homepage';
import Projects from './components/projects';
import Navigation from './components/navigation';
import Photo from './assets/Photo.png';
import "./css/app.css";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {tab: "home"}
    }

    render () {
        return (
            <Router>
                <div className="app">
                    { this.renderMenu() }
                    <br />
                    { this.renderRoutes() }
                </div>
            </Router>
        )
    }

    renderMenu () {
        return (
            <div className="menu">
                <div className="left">
                    <img id="photo" src={Photo}></img>
                </div>
                <div className="right">
                    <p id="name">Eric Hansen</p>
                    <Navigation />
                </div>
            </div>
        );
    }

    renderRoutes() {
        return (
            <div className="body">
                <Route path="/" component={ Homepage } />
                <Route exact path="/projects" component={ Projects } />
            </div> 
        );
        
    }
}

export default App;
import React from 'react'; 
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Homepage from './homepage';
import Projects from './projects';
import Photo from '../assets/Photo.png';
import "../css/app.css";

class App extends React.Component {

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
                    {this.renderNavigation()}
                </div>
            </div>
        );
    }

    renderNavigation() {
        return (
            <div className="nav">
                <Link to="/">Homepage</Link>
                <Link to="/projects">Projects</Link>
                {/* <Link to="/links" component={ Links }>Contact Info</Link> */}
            </div>
        );
    }

    renderRoutes() {
        return (
            <div className="body">
                <Route path="/" component={ Homepage } />
                <Route path="/projects" component={ Projects } />
            </div>
        );
    }
}

export default App;
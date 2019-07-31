import React from 'react'; 
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from './components/homepage';
import Projects from './components/projects';
import Navigation from './components/navigation';
import Photo from './assets/Photo.png';
import { Icon } from 'antd';
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
                    { this.renderNavigation() }
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
                    <div className="links">
                        <p>&nbsp;<Icon type="mail" /> ehansen247@gmail.com</p>
                        <p>&nbsp;<Icon type="github" /> github.com/ehansen247</p> 
                        <p>&nbsp;<Icon type="linkedin" /> linkedin.com/in/eric-hansen-2022</p> 
                    </div>
                </div>
            </div>
        );
    }

    renderNavigation () {
        return (
            <div className="navigation">
                <Navigation  />
            </div> 
        );
    }

    renderRoutes() {
        return (
            <div className="body">
                <Route exact path="/" component={ Homepage } />
                <Route exact path="/projects" component={ Projects } />
            </div> 
        );
        
    }
}

export default App;
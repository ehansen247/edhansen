import React from 'react'; 
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from './components/homepage';
import Projects from './components/projects';
import NavigationWithRouter from './components/navigation';
import Photo from './assets/Photo.png';
import { Icon } from 'antd';
import "./css/app.css";

class App extends React.Component {

    render () {
        return (
            
            <div className="app">
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    { this.renderMenu() }
                    <br />
                    { this.renderNavigation() }
                    { this.renderRoutes() }
                </BrowserRouter>
            </div>
        )
    }

    renderMenu () {
        return (
            <div className="menu">
                <div className="left">
                    <img alt="Profile" id="photo" src={Photo}></img>
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
                <NavigationWithRouter  />
            </div> 
        );
    }

    renderRoutes() {
        
        return (
            <div className="body">
                    
                <Switch>
                    <Route exact path="/" component={ Homepage } />
                    <Route exact path="/projects" component={ Projects } />
                </Switch>
            </div> 
        );
    }
}

export default App;
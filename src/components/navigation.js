import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import "../css/nav.css";
import { Button, Dropdown, Icon, Menu } from 'antd';

const ButtonGroup = Button.Group;

class Navigation extends Component {

    constructor(props) {
        super(props);
        const path = this.props.location.pathname;
        this.state = {
            path: path,
            home: (path === '/') ? 'primary' : 'default',
            projects: (path === '/projects') ? 'primary' : 'default'
        }
    }

    componentDidUpdate() {
        const path = this.props.location.pathname;
        if (path !== this.state.path) {
            this.setState({
                path: path,
                home: (path === '/') ? 'primary' : 'default',
                projects: (path === '/projects') ? 'primary' : 'default'
            })
        }
    }

    renderBar () {
        const links = (
            <Menu>
                <Menu.Item>
                    <a href="https://github.com/ehansen247"><Icon type="github" /> GitHub</a>
                </Menu.Item>
                <Menu.Item>
                    <a href="https://www.linkedin.com/in/eric-hansen-2022/"><Icon type="linkedin" /> LinkedIn</a>
                </Menu.Item>
                <Menu.Item>
                    <a href="https://www.facebook.com/ehansen247"><Icon type="facebook" /> Facebook</a>
                </Menu.Item>
            </Menu>
        );
        return (
            <div className="nav">
                <ButtonGroup>
                    <Button className="button" type={this.state.home}><Link to="/">Home</Link></Button>
                    <Button className="button" type={this.state.projects}><Link to="/projects">Projects</Link></Button>
                    <Dropdown overlay={links}>
                        <Button className="button">Links<Icon type="down" /></Button>
                    </Dropdown>
                </ButtonGroup>
            </div>
        )
    }

    render () {
        return (
            this.renderBar()
        );
    }
}

const NavigationWithRouter = withRouter(Navigation);
export default NavigationWithRouter;


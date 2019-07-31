import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../css/nav.css";
import {Button, Dropdown, Icon, Menu } from 'antd';

const ButtonGroup = Button.Group;

class Navigation extends Component {

    renderBar () {
        const links = (
            <Menu>
                <Menu.Item>
                    <a href="https://github.com/ehansen247"><Icon type="github" /> GitHub</a>
                </Menu.Item>
                <Menu.Item>
                    <a href="https://www.linkedin.com/in/eric-hansen-2022//"><Icon type="linkedin" /> LinkedIn</a>
                </Menu.Item>
                <Menu.Item>
                    <a href="https://www.facebook.com/ehansen247"><Icon type="facebook" /> Facebook</a>
                </Menu.Item>
            </Menu>
        );
        return (
            <div className="nav">
                <ButtonGroup>
                    <Button type="primary"><Link to="/">Home</Link></Button>
                    <Button><Link to="/projects">Projects</Link></Button>
                    <Dropdown overlay={links}>
                        <Button>Links<Icon type="down" /></Button>
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

export default Navigation;


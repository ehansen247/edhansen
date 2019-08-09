import React, { Component } from 'react';

class Homepage extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <p>Hi, I'm Eric, a rising sophomore at Harvard College studying Applied Mathematics
                    and Computer Science. I'm currently studying abroad at the London School
                    of Economics. If you'd like to see a portfolio of my programming projects, 
                    feel free to check out my <a href="github.com/ehansen247">GitHub</a>, or 
                    the descriptions and links under the 
                    Projects tab on this site. Outside of programming, my interests include being a part of the  
                    <a href="https://www.gocrimson.com/sports/sailing/index">Harvard Varsity Sailing Team</a> 
                    and <a href="http://business.thecrimson.com/">The Crimson Business Board</a>. 
                    I'll be studying Computer
                    Science along with Mathematics, Statistics, and Economics over the next three
                    years, and am looking to work in a Software Development role during the 
                    next summer. 
                </p>
            </div>
        );
    }
}

export default Homepage;
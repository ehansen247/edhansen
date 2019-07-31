import React, { Component } from 'react';
import { Card } from 'antd';
import '../css/projects.css';

class Projects extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <Card hoverable="true" className="project" title="Inspire" extra={<a href="github.com/ehansen247/Inspire">GitHub</a>}>
                    <p> I developed Inspire during my freshman summer to build an accessible database of
                        inspirational quotes. In part, I took on this project because I wanted to learn how to 
                        integrate an SQL database, NodeJs backend, and Angular frontend in the 
                        same project. Along the way, I decided to include a daily inspirational quote, and
                        the ability for users to create an account and store their own personal quotes.
                    </p>
                </Card> <br />
                <Card hoverable="true" className="project" title="HubSpotAPI" extra={<a href="https://github.com/ehansen247/HubSpotAPI">GitHub</a>}>
                    <p>Integrated HubSpot CRM with Megalytic SaaS product (megalytic.com). 
                        Provides product usage data inside contact records, enabling sales and 
                        marketing automation to target company’s best prospects. 
                    </p>
                </Card> <br />
                <Card hoverable="true" className="project" title="ReactGames" extra={<a href="https://ehansen247.github.io/ReactGames/">Site</a>}>
                    <p>Recreated the games of ConnectFour and TicTacToe to learn React. 
                        Developed a "computer AI player" that uses Depth First Search to 
                        determine the best move at any point in a TicTacToe game.
                    </p>
                </Card> <br />
                <Card hoverable="true" className="project" title="iOSPersonalFinance" extra={<a href="github.com/ehansen247/FinancialLiteracyApp/">GitHub</a>}>
                    <p>Developed an iOS App that helps users learn the basics of Personal Finance. 
                        Includes a dictionary of financial terms, a financial literacy curriculum, 
                        market news, budget tracker, and financial calculator.
                    </p>
                </Card> <br />
                <Card hoverable="true" className="project" title="Chess GUI" extra={<a href="github.com/ehansen247/JavaChessGame/">GitHub</a>}>
                    <p>A fully functional, two-player, graphics-based, interactive chess game/program 
                        built as a Java Applet. Features all standard Chess moves including pawn promotion, 
                        en-passant, castling, etc., as well as customizable board colors, and a Game To PGN
                        converter.
                    </p>
                </Card> <br />
                
            </div>
        );
    }
}

export default Projects;
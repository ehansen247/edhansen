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
                <Card hoverable="true" className="card" title="Inspire" extra={<a href="github.com/ehansen247/Inspire">GitHub</a>}>
                    <p className="cardText"> Inspire is an accessible database of
                        4,000+ inspirational quotes. Integrates a PostgreSQL database and Angular FrontEnd into a NodeJS web app. Includes a daily inspirational quote, and
                        the ability for users to create an account and store their own personal quotes.
                    </p>
                </Card> <br />
                <Card hoverable="true" className="card" title="HubSpotAPI" extra={<a href="https://github.com/ehansen247/HubSpotAPI">GitHub</a>}>
                    <p className="cardText">Integrated HubSpot CRM with Megalytic SaaS product (megalytic.com). 
                        Provides product usage data inside contact records, enabling sales and 
                        marketing automation to target company’s best prospects. 
                    </p>
                </Card> <br />
                <Card hoverable="true" className="card" title="ReactGames" extra={<a href="https://ehansen247.github.io/ReactGames/">Site</a>}>
                    <p className="cardText">Recreated the games of ConnectFour and TicTacToe to learn React. 
                        Developed a "computer AI player" that uses Depth First Search to 
                        determine the best move at any point in a TicTacToe game.
                    </p>
                </Card> <br />
                <Card hoverable="true" className="card" title="iOSPersonalFinance" extra={<a href="github.com/ehansen247/FinancialLiteracyApp/">GitHub</a>}>
                    <p className="cardText">Developed an iOS App that helps users learn the basics of Personal Finance. 
                        Includes a dictionary of financial terms, a financial literacy curriculum, 
                        market news, budget tracker, and financial calculator.
                    </p>
                </Card> <br />
                <Card hoverable="true" className="card" title="Chess GUI" extra={<a href="github.com/ehansen247/JavaChessGame/">GitHub</a>}>
                    <p className="cardText">A fully functional, two-player, graphics-based, interactive chess game/program 
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
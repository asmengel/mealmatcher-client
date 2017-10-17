import React from 'react';
import { connect } from 'react-redux';

import { toggleHomepage } from '../actions';

// import './homepage.css';

export class Homepage extends React.Component {


    render() {
        return (
            <div className="homepage">
                
                <ul>
                    <li><a className="sign-up" href="#" onClick={e => this()}> Sign-up</a> </li>
                    <li><a className="login" href="#" onClick={e => this()}> Login</a> </li>
                </ul>
                <div> Restaurant Container
                </div>
            </div>
        );
    }
}

export default connect()(Homepage);

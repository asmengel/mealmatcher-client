import React from 'react';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';
import { signInRoute, createUserRoute, returnHomepageSuccess } from '../actions/routes';
import { returnHomeReducer, } from '../reducers';
import './header.css';

export class Header extends React.Component {
    returnHomepageSuccess(event) {
        event.preventDefault();
        this.props.dispatch(returnHomepageSuccess());
    }
    signInRoute(event) {
        console.log('signin clicked');
        event.preventDefault();
        this.props.dispatch(signInRoute());
    }
    createUserRoute(event) {
        event.preventDefault();
        this.props.dispatch(createUserRoute());
    }

    render() {
        return (
            <div className="container">
                
                
                <nav className="nav"> 
            <ul>
                    <li className="home"><button  className="nav-button" onClick={e => window.location.href = "http://localhost:3000"}>Go Home</button></li>
                    <li className="signUp"><button className="nav-button" onClick={e => this.createUserRoute(e)}>Sign Up!</button></li>
                    <li className="logIn"><button className="nav-button" onClick={e => this.signInRoute(e)}>Log In!</button></li>
            </ul>
                </nav>
                <h1 id="title">Meal Matcher</h1>
            </div>
        )
    }
}


export default connect()(Header);
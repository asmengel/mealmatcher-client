import React from 'react';
import { connect } from 'react-redux';
import { signInRoute, createUserRoute, returnHomepageSuccess} from '../actions/routes';
import { returnHomeReducer, } from '../reducers';

// import './header.css';

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
            <div className="header">
                <h1 className="title">Meal Matcher</h1>
                <div className="navbar">
                    <div><button onClick={e => window.location.href="http://localhost:3000"}>Go Home</button></div>
                    <div><button onClick={e => this.createUserRoute(e)}>Sign Up!</button></div>
                    <div><button onClick={e => this.signInRoute(e)}>Log In!</button></div>
                </div>

            </div>
        )
    }
}


export default connect()(Header);
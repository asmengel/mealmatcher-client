import React from 'react';
import { connect } from 'react-redux';
import { signIn, createUser, returnHomepageSuccess} from '../actions';
import { returnHomeReducer, } from '../reducers';

// import './header.css';

export class Header extends React.Component {
    returnHomepageSuccess(event) {
        event.preventDefault();
        this.props.dispatch(returnHomepageSuccess());
    }
    signIn(event) {
        console.log('signin clicked');
        event.preventDefault();
        this.props.dispatch(signIn());
    }
    createUser(event) {
        event.preventDefault();
        this.props.dispatch(createUser());
    }

    render() {
        return (
            <div className="header">
                <h1 className="title">Meal Matcher</h1>
                <div className="navbar">
                    <div><button onClick={e => this.returnHomepageSuccess(e)}>Go Back!</button></div>
                    <div><button onClick={e => this.createUser(e)}>Sign Up!</button></div>
                    <div><button onClick={e => this.signIn(e)}>Log In!</button></div>
                </div>

            </div>
        )
    }
}


export default connect()(Header);
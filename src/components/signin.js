import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../actions';
import Header from './header';
import {signInReducer} from '../reducers';
export class Signin extends React.Component {
signIn(event) {
    //console.log('signin clicked');
    event.preventDefault();
    this.props.dispatch(signIn());
}
render() {

    return (
        <div className="signin">
            <Header />
            <p> header and nav bar above ^^^^^</p>
            <h3>Log In Page</h3>
            <form>
                <input className="username" placeholder="Username"></input>
                <input className="password" placeholder="Password"></input>
                </form>
                <button className="signin-button" onClick={e => this.signIn(e)}>Log In!</button>
            </div>
            
    );


}

}

export default connect()(Signin);
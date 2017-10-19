import React from 'react';
import { connect } from 'react-redux';
import { signInRoute } from '../actions';
import Header from './header';
import { signInReducer } from '../reducers';
export class Signin extends React.Component {
    signIn(event) {
        console.log('signin clicked');
        console.log(this.refs.username.value);
        console.log(this.refs.password.value)
        event.preventDefault();
        this.props.dispatch(signInRoute(this.refs.username.value,this.refs.password.value));
        // this.refs.username.value='';
        // this.refs.password.value='';
    }
    render() {

        return (
            <div className="signin">
                <Header />
                <p> header and nav bar above ^^^^^</p>
                <h3>Log In Page</h3>
                <form>
                    <input ref="username" className="username" placeholder="Username"></input>
                    <input ref="password" className="password" placeholder="Password"></input>

                    <button className="signin-button" onClick={e => this.signIn(e)}>Log In!</button>
                </form>
            </div>

        );


    }

}

export default connect()(Signin);
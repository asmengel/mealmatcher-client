import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions';
import Header from './header';
export class Signup extends React.Component {

    // returnHomepage(event) {
    //     event.preventDefault();
    //     this.props.dispatch(returnHomepage());
    //   }
    addUser(event) {
        event.preventDefault();
        this.props.dispatch(addUser());
    }
    render() {
        return (
            <div className="signup">
                <Header />
                <p> nav bar and title above ^^^^^</p>
                <h3>Signup for our APP!</h3>
                <form>
                    <input className="firstname" placeholder="FirstName"></input>
                    <input className="lastname" placeholder="LastName"></input>
                    <input className="username" placeholder="UserName"></input>
                    <input className="password" placeholder="Password"></input>
                </form>
                <button className="signup-button" onClick={e => this.addUser(e)}>Join Us!</button>
            </div>
        );
    }



}

export default connect()(Signup);
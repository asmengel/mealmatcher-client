import React from 'react';
import { connect } from 'react-redux';
import Signin from './signin';
import Signup from './signup';
import Header from './header';
import Restaurant from './restaurant';
import Homepage from './homepage';


export class App extends React.Component {
  render() {

    if (this.props.route === 'homepage') {
      return (
        <div>
          <Homepage />
        </div>
      );
    } else if (this.props.route === 'restaurant') {
      return (
        <div>
          <Restaurant />
        </div>
      );
    }
    else if (this.props.route === 'signup') {
      return (
        <div>
          <Signup />
        </div>
      )
    }
    else if (this.props.route === 'signin') {
      return (
        <div>
          <Signin />
        </div>
      )
    }
  }
};

const mapStateToProps = state => ({
  route: state.restaurants.route
});

export default connect(mapStateToProps)(App);
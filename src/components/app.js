import React from 'react';
//need to make
import Header from './header';
// import Container from './container'; 
import {selectRestaurant} from '../actions';
import {connect} from 'react-redux';

export class App extends React.Component {
  // eventDemo(e) { console.log('clicked me') }
  selectRestaurant(event) {
    event.preventDefault();
    this.props.dispatch(selectRestaurant());
  }

  render() {

    
    return (
      <div>
        <Header />

        <div><button onClick={e => this.selectRestaurant(e)}>restaurant 1</button></div>
      </div>
    );
  }
};

export default connect()(App);
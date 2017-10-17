import React from 'react';
//need to make
import Header from './header';
import Restaurant from './restaurant';
// import Container from './container'; 
import { selectRestaurant } from '../actions';
import { connect } from 'react-redux';

export class App extends React.Component {
  // eventDemo(e) { console.log('clicked me') }
  selectRestaurant(event) {
    event.preventDefault();
    this.props.dispatch(selectRestaurant());
  }

  render() {

    if (this.props.route === 'homepage') {
      return (
        <div>
          <Header />

          <div><button onClick={e => this.selectRestaurant(e)}>restaurant 1</button></div>
        </div>
      );
    } else if (this.props.route === 'restaurant') {
      return (
        <div>
          <Restaurant />

          <div><button onClick={e => this.returnHomepage(e)}>go home</button></div>
        </div>
      );
    }
  }
};

const mapStateToProps = state => ({
  route: state.route
});

export default connect(mapStateToProps)(App);
import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
// import { toggleHomepage } from '../actions';
import { returnHomeReducer } from '../reducers';
import { returnHomepage } from '../actions';
export class Restaurant extends React.Component {
  // returnHomepage(event) {
  //   event.preventDefault();
  //   this.props.dispatch(returnHomepage());
  // }

  render() {
    return (
      <div className="restaurant">
        <Header />
        <p> Nav Bar Above ^^^^^^</p>
        <ul>
          <h3>{this.props.restaurant.name}</h3>
          <ul>Hours: {this.props.restaurant.hours}</ul>
          <ul>Address: {this.props.restaurant.address}</ul>
          <ul>Price: ${this.props.restaurant.price}</ul>
          <ul>Cuisine: {this.props.restaurant.hours}</ul>
          <ul>tel: (123)-456-7890</ul>
          <img src={this.props.restaurant_Image_URL}/>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  restaurant: state.restaurants.selectedRestaurant
});

export default connect(mapStateToProps)(Restaurant);

/*  hours: req.body.hours,
        cuisine: req.body.cuisine,
        price: req.body.price,
        address: req.body.address,
        reservation: req.body.reservation,
        name: req.body.name,
        restaurant_URL: req.body.restaurant_URL,
        restaurant_Image_URL: req.body.restaurant_Image_URL
        */
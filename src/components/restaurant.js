import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import RestaurantForm from './restaurant-form';
// import { toggleHomepage } from '../actions';
import { returnHomeReducer } from '../reducers/restaurant';
import { addEaters, returnHomepage } from '../actions/routes';
export class Restaurant extends React.Component {
  // returnHomepage(event) {
  //   event.preventDefault();
  //   this.props.dispatch(returnHomepage());
  // }

  componentwillMount() {
    this.props.dispatch(RestaurantForm);
  }

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

          <ul>Eaters: {this.props.restaurant.eaters.map((cv, idx) => {
            return <div key={idx}><li >Name: {cv.name} </li>
              <li> Email: {cv.email}</li></div>
          })}</ul>
        </ul>
        <RestaurantForm restaurant={this.props.restaurant} />
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
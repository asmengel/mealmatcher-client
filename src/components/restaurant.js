import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
// import { toggleHomepage } from '../actions';
import { returnHomeReducer } from '../reducers/restaurant';
import { returnHomepage } from '../actions/routes';
export class Restaurant extends React.Component {
  // returnHomepage(event) {
  //   event.preventDefault();
  //   this.props.dispatch(returnHomepage());
  // }

  render() {
    console.log(this.props.restaurants)
    return (
      <div className="restaurant">
        <Header />
        <p> Nav Bar Above ^^^^^^</p>
        <ul>
          <h3>{this.props.restaurants.name}</h3>
          <ul>Hours: {this.props.restaurants.hours}</ul>
          <ul>Address: {this.props.restaurants.address}</ul>
          <ul>Price: ${this.props.restaurants.price}</ul>
          <ul>Cuisine: {this.props.restaurants.hours}</ul>
          <ul>tel: (123)-456-7890</ul>
          <img src={this.props.restaurant_Image_URL}/>
          <ul>Eaters: {this.props.restaurants.eaters.map((cv, idx)=>{
            return <li key={idx}>{cv.name} {cv.email}</li>
            })}</ul>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurants.restaurants
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
import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { selectRestaurant } from '../actions';

// import './homepage.css';

export class Homepage extends React.Component {
    selectRestaurant(event) {
        event.preventDefault();
        this.props.dispatch(selectRestaurant());
    }

    render() {
        return (
            <div className="homepage">

                <Header />
                <p> above is an unstyled nav bar</p>

                <p> top 20 restaurants will go below </p>

                <div><h3>Capital Grill</h3>
                    <ul><li>Steak and Lobster</li>
                        <li>20+ dollars per plate</li>
                        <li>Open reservations<a href="#">Book Now</a></li>
                        <li> 123 easy street, New York NY, 12345</li>
                    </ul><button onClick={e => this.selectRestaurant(e)}>More Details</button></div>


                <div> Local Fav's
                </div>
            </div>
        );
    }
}

export default connect()(Homepage);

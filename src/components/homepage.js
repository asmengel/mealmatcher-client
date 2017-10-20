import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { selectRestaurant, dataPusher, returnHomepage } from '../actions/routes';

import './homepage.css';

export class Homepage extends React.Component {

    componentWillMount() {
        this.props.dispatch(returnHomepage());
    }
   
    selectRestaurant(restaurant) {
        this.props.dispatch(selectRestaurant(restaurant));
        //logs all restaurants if clicked
    }

    // add URL and 
    lister() {
        return this.props.restaurants.map((val, index) => {
            return (
                <div key={index}>
                    <li>{val.name}</li>
                    
                    <button className="more-details-button" onClick={() => this.selectRestaurant(val)}>More Details</button>
                </div>
            )
        })
    }

    render() {
        //revist line 45 {<ul>{this.props.restaurants && this.lister()}</ul>}
        return (

            <div className="homepage">

                {<Header />}
                
                
                {<ul>{this.props.restaurants && this.lister()}</ul>}
        
            </div>
        );

    }
}
const mapStateToProps = state => ({
    restaurants: state.restaurants.restaurants
})

export default connect(mapStateToProps)(Homepage);

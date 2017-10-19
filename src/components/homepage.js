import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { selectRestaurant, dataPusher, returnHomepage } from '../actions/routes';

// import './homepage.css';

export class Homepage extends React.Component {

    componentWillMount() {
        console.log('mounting');
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
                    <li>{val.address}</li>
                    <li>{val.hours}</li>
                    <li>{val.price}</li>
                    <li>{val.cuisine}</li>
                    <button onClick={() => this.selectRestaurant(val)}>More Details</button>
                </div>
            )
        })
    }

    render() {
        console.log(this);
        //revist line 45 {<ul>{this.props.restaurants && this.lister()}</ul>}
        return (

            <div className="homepage">

                {<Header />}
                <p> above is an unstyled nav bar</p>
                <p> top 20 restaurants will go below </p>
                {<ul>{this.props.restaurants && this.lister()}</ul>}
        
            </div>
        );

    }
}
const mapStateToProps = state => ({
    restaurants: state.restaurants.restaurants
})

export default connect(mapStateToProps)(Homepage);

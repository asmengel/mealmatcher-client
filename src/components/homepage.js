import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { selectRestaurant, dataPusher } from '../actions';

// import './homepage.css';

export class Homepage extends React.Component {

    componentDidMount() {
        this.props.dispatch(dataPusher());
    }


    selectRestaurant(event) {
        event.preventDefault();
        this.props.dispatch(selectRestaurant());
    }
    dataPusher(event) {
        event.preventDefault();
        this.props.dispatch(dataPusher());
    }

    render() {
        console.log(this.props.restaurants);
        return (
            
            <div className="homepage">

                <Header />
                <p> above is an unstyled nav bar</p>
                <li>{this.props.restaurants.map((restaurant, idx) => {

                    <li key={idx}>{restaurant}</li>
                })}</li>
                
                <p> top 20 restaurants will go below </p>

                <div><h3>{this.props.restaurants}</h3>
                    <ul>

                    </ul><button onClick={e => this.selectRestaurant(e)}>More Details</button></div>


                <div> Local Fav's
                </div>
            </div>
        );
        
    }
}
const mapStateToProps = state => ({
    restaurants: state.restaurants
})
export default connect(mapStateToProps)(Homepage);

import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { selectRestaurant, dataPusher } from '../actions';

// import './homepage.css';

export class Homepage extends React.Component {
    selectRestaurant(event) {
        event.preventDefault();
        this.props.dispatch(selectRestaurant());
    }
    dataPusher(event) {
        event.preventDefault();
        this.props.dispatch(dataPusher());
    }

    render() {
        return (
            <div className="homepage">

                <Header />
                <p> above is an unstyled nav bar</p>

                <p> top 20 restaurants will go below </p>

                <div><h3>{this.props.state.title}</h3>
                    <ul>

                    </ul><button onClick={e => this.selectRestaurant(e)}>More Details</button></div>


                <div> Local Fav's
                </div>
            </div>
        );
    }
}

export default connect()(Homepage);

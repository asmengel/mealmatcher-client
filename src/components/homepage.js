import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { selectRestaurant, dataPusher, returnHomepage} from '../actions';

// import './homepage.css';

export class Homepage extends React.Component {

    componentWillMount() {
        this.props.dispatch(returnHomepage());
    }


    // selectRestaurant(event) {
    //     event.preventDefault();
    //     this.props.dispatch(selectRestaurant());
    // }

    // dataPusher(event) {
    //     event.preventDefault();
    //     this.props.dispatch(dataPusher());
    // }

    lister() {
        return this.props.restaurants.map((val,index)=>{
            return (
                <li key={index}>{val.name}</li>
            )
        })
    }

    render() {
        console.log(this.props);
        return (
            
            <div className="homepage">

                {<Header />}
                <p> above is an unstyled nav bar</p>
                {/* <li>{this.props.map((restaurant, idx) => {

                    <li key={idx}>{restaurant}</li>
                })}</li>  */}
                
                {/* {<ul>{this.lister()}</ul>} */}

                {this.props.restaurants.map((val,index)=>{
            return (
                <li key={index}>{val.name}</li>
            )
        })}

                
                <p> top 20 restaurants will go below </p>

                {/* <div><h3>{this.props.restaurants}</h3>
                    <ul>

                    </ul><button onClick={e => this.selectRestaurant(e)}>More Details</button></div> */}


                <div> Local Fav's
                </div>
            </div>
        );

        }
}
const mapStateToProps = state => ({
    restaurants: state.restaurants
})

function mapper(state) {
    return {
        restaurants: state.restaurants
    }
}
// export default connect(mapStateToProps)(Homepage);
export default connect(mapper)(Homepage);

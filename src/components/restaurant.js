import React from 'react';
import { connect } from 'react-redux';

// import { toggleHomepage } from '../actions';


export class Restaurant extends React.Component {


  render() {
    return (
      <div className="restaurant">

        <ul>
          <p>what</p>

          <div><button onClick={e => this.selectRestaurant(e)}>asdkjfalk</button></div>
        </ul>
        <div> new menu
                </div>
      </div>
    );
  }
}

export default connect()(Restaurant);

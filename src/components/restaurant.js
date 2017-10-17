import React from 'react';
import { connect } from 'react-redux';

// import { toggleHomepage } from '../actions';
import {returnHomeReducer} from '../reducers';
import { returnHomepage } from '../actions';
export class Restaurant extends React.Component {
returnHomepage(event) {
  event.preventDefault();
  this.props.dispatch(returnHomepage());
}

  render() {
    return (
      <div className="restaurant">

        <ul>
          <p>what</p>

          <div><button onClick={e => this.returnHomepage(e)}>go home</button></div>
        </ul>
        <div> new menu
                </div>
      </div>
    );
  }
}
// mapStateToProps = state => ({
//   route: state.route
// });
export default connect()(Restaurant);

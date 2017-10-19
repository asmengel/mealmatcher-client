import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
// import { toggleHomepage } from '../actions';
import { returnHomeReducer } from '../reducers';
import { returnHomepage } from '../actions/routes';
export class Restaurant extends React.Component {
  // returnHomepage(event) {
  //   event.preventDefault();
  //   this.props.dispatch(returnHomepage());
  // }

  render() {
    return (
      <div className="restaurant">
        <Header />
        <p> Nav Bar Above ^^^^^^</p>
        <ul>
          <h3>The World's Greatest Restaurant!! "AKA restaurant name"</h3>
        </ul>
        <div> Restaurant data will go here "full dump of all db data and links for reservation/ groups etc"
                </div>
      </div>
    );
  }
}
// mapStateToProps = state => ({
//   route: state.route
// });
export default connect()(Restaurant);

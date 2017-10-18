import React from 'react';
import {connect} from 'react-redux';
import { signIn, createUser, returnHomepage } from '../actions';
import {returnHomeReducer, } from '../reducers';
// import TopNav from './top-nav';//
//import Homepage from './homepage';//

// import './header.css';

export class Header extends React.Component {
      returnHomepage(event) {
          event.preventDefault();
          this.props.dispatch(returnHomepage());
      }
      signIn(event) {
          console.log('signin clicked');
          event.preventDefault();
          this.props.dispatch(signIn());
      }
      createUser(event) {
        event.preventDefault();
        this.props.dispatch(createUser());
      }
   
    render() {
        return (
            <div className="header">
                <h1 className="title">Meal Matcher</h1>
                <div className="navbar">
                <div><button onClick={e => this.returnHomepage(e)}>Go Back!</button></div>
                <div><button onClick={e => this.createUser(e)}>Sign Up!</button></div>
                <div><button onClick={e => this.signIn(e)}>Log In!</button></div>
                </div>

                </div>
        )
    }
}

// export function Header(props) {
//     let homepage;
//     if (props.showHomepage) {
//         homepage = <Homepage />;
//     }

//     return (
//         <Homepage />
//         // <header>
            
//         //     {homepage}
//         //     <h1>Meal Matcher</h1>
//         // </header>
//     );
// };

// const mapStateToProps = state => ({
//     showInfoModal: state.showHomepage
// });

export default connect()(Header);
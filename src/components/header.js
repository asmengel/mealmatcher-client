import React from 'react';
import {connect} from 'react-redux';

// import TopNav from './top-nav';//
import Homepage from './homepage';//

// import './header.css';

export function Header(props) {
    let homepage;
    if (props.showHomepage) {
        homepage = <Homepage />;
    }

    return (
        <header>
            
            {homepage}
            <h1>Meal Matcher</h1>
        </header>
    );
};

const mapStateToProps = state => ({
    showInfoModal: state.showHomepage
});

export default connect(mapStateToProps)(Header);
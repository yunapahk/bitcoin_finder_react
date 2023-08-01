import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <div className="nav">
            <Link to="/">Home
               <div>Crypto Prices</div>
            </Link>
            <Link to="/currencies">
                <div>Currencies</div>
            </Link>
        </div>
    );
};

export default Nav;
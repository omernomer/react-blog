import React from 'react';
import {Link,NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="row">
        <nav className="col-12">
        <ul className="nav justify-content-center nav-tabs nav-fill">
            <li className="nav-item"><NavLink className="nav-link" to="/" exact={true}>Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/articles">Articles</NavLink></li>
        </ul>
        </nav>
        </div>
    );
}
 
export default NavBar;
import React, {Component} from "react";

const NavBar = (props) => {
    console.log('NavBar - Rendered');
    return (<nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
            NavBar <span className="badge badge-pill badge-secondary">{props.countersCount}</span>
        </a>
    </nav>);
};

/*class NavBar extends Component {

    //Stateless Functional Component : because this component doesnt have a state so Class is not needed

    render () {
        return (<nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                NavBar <span className="badge badge-pill badge-secondary">{this.props.countersCount}</span>
            </a>
        </nav>);
    }
}*/

export default NavBar;

import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '../../css/header.scss';

import prefix from "./Config";

let routes = [{"/home": true}, {"/about": false}, {"/skills": false}, {"/works": false}, {"/contact": false}];

const MyLink = ({to, onClick, className, children = []}) => {
    console.log("window" + window.location.pathname);
    console.log(prefix + to);

    return (
        <Link onClick={onClick}
              to={prefix + to}
              className={className}
        ><span>{children}</span></Link>
    )
};

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false,
            routeState: routes
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleOnClickHeader(e) {
        console.log(e);
        // eslint-disable-next-line array-callback-return
        routes.map(object => {
            if (object.hasOwnProperty(e)) {
                object[e] = true;
            } else {
                object[Object.keys(object)[0]] = false;
            }
        });
        this.setState({
            routeState: routes
        });
    }

    handleClassNameHeader(e) {
        if (this.state.routeState) {
            return Object.values(this.state.routeState.find(o => {return o.hasOwnProperty(e);}))[0] ? "active" : "";
        } else {
            return "";
        }
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <div>
                <header className={this.state.isToggleOn ? "is-open " : () => setTimeout((""), 4000)}>
                    <div className={(this.state.isToggleOn ? "is-open " : " ") + "nav"}>
                        <div className="skewedNav">
                            <MyLink
                                to={"/home"}
                                onClick={() => this.handleOnClickHeader("/home")}
                                className={this.handleClassNameHeader("/home")}
                            > &lt; Home /&gt; </MyLink>
                            <p></p>
                            <MyLink
                                to={"/about"}
                                onClick={() => this.handleOnClickHeader("/about")}
                                className={this.handleClassNameHeader("/about")}
                            > &lt; About /&gt; </MyLink>
                            <p></p>
                            <MyLink
                                to={"/skills"}
                                onClick={() => this.handleOnClickHeader("/skills")}
                                className={this.handleClassNameHeader("/skills")}
                            > &lt; Skills /&gt; </MyLink>
                            <p></p>
                            <MyLink
                                to={"/works"}
                                onClick={() => this.handleOnClickHeader("/works")}
                                className={this.handleClassNameHeader("/works")}
                            > &lt; Work /&gt; </MyLink>
                            <p></p>
                            <MyLink
                                to={"/contact"}
                                onClick={() => this.handleOnClickHeader("/contact")}
                                className={this.handleClassNameHeader("/contact")}
                            > &lt; Contact /&gt; </MyLink>
                        </div>
                    </div>
                    <div className={(this.state.isToggleOn ? "is-open " : " ") + "social_buttons"}>
                        <Link to="https://www.facebook.com/chytailo" target='_blank'><i
                            className="fab fa-facebook-f"/></Link>
                        <Link to="https://www.instagram.com/maks_chytailo" target='_blank'><i
                            className="fab fa-instagram"/></Link>
                        <Link to="https://t.me/ormaks" target='_blank'><i
                            className="fab fa-telegram-plane"/></Link>
                    </div>
                    <div className="burger_menu">
                        <button className={(this.state.isToggleOn ? "is-open " : " ") + "menu-icon"}
                                onClick={this.handleClick}><span/></button>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header

import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '../../css/home.scss';
import PreloaderElement from '../containers/PreloaderElement';
import TextSplit from '../containers/TextAnimation';

import prefix from "./Config";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }

    componentDidMount() {
        setTimeout(() => this.setState({isLoading: false}), 1500);
    }

    render() {
        if (this.state.isLoading) {
            return <PreloaderElement/>
        }
        return (
            <div className="home_content">
                <div className="left_side">
                    <div className="home_main">
                        <TextSplit className="text_h1">Hi,</TextSplit>
                        <TextSplit className="text_h1">I'm Soumya,</TextSplit>
                        <TextSplit className="text_h1">Software Engineer. </TextSplit>
                        <h2 className="h2_greating">Fullstack / DevOps / ML and AI</h2>
                    </div>
                    <Link to={prefix + "/contact"} className="contact_btn">Get In Touch</Link>
                </div>
            </div>

        )
    }

}

export default Home;

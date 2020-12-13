import React, {Component} from 'react';
import '../../css/about.scss';
import PreloaderElement from '../containers/PreloaderElement';
import TextSplit from '../containers/TextAnimation';

class About extends Component {
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
            <div className="about_content">
                <span className="tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                <div className="about_main">
                    <div className="left_side">
                        <span className="tag_h1">&lt;h1&gt;</span> <br/>
                        <TextSplit className="text_h1">About me</TextSplit>
                        <span className="tag_h1">&lt;h1/&gt;</span> <br/>

                        <TextSplit className='left_side_text' splitBy="words">Hello, I am 27-year-old developer from
                            India.</TextSplit>
                        <TextSplit className='left_side_text' splitBy="words">Everything started with passion to web
                            technologies (HTML, CSS). In 2012 I started to learn all about web development.</TextSplit>
                        <TextSplit className='left_side_text' splitBy="words">Everything started with passion to web
                            technologies (HTML, CSS). In 2012 I started to learn all about web development.</TextSplit>
                        <TextSplit className='left_side_text' splitBy="words">HEverything started with passion to web
                            technologies (HTML, CSS). In 2012 I started to learn all about web development.</TextSplit>
                        <TextSplit className='left_side_text' splitBy="words">In multinational team we were building
                            large Single Page Application like HR tool using
                            React.</TextSplit>
                        <TextSplit className='left_side_text' splitBy="words">Now I'm testing myself in freelance, but
                            I'm open to any suggestions!</TextSplit>
                    </div>
                </div>
                <span className="tags">&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br/> &lt;/html&gt;</span>
            </div>
        )
    }
}

export default About;

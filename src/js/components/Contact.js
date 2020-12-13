import React, {Component} from 'react';
import PreloaderElement from '../containers/PreloaderElement';
import TextSplit from '../containers/TextAnimation';

import '../../css/contact.scss';

let defaultProps = {
    /*GOOGLE MAPS PROPS*/
    center: {lat: 49.8431, lng: 24.02607},
    zoom: 13,
    mapStyles: [
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#012621"
                },
                {
                    "weight": 0.8
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels",
            "stylers": [
                {
                    "color": "#012621"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#0c0000"
                }
            ]
        },
        {
            "featureType": "administrative.province",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#012621"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#012621"
                }
            ]
        },
        {
            "featureType": "administrative.neighborhood",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#012621"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#06c5a9"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#06c5a9"
                },
                {
                    "lightness": -7
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#06c5a9"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "weight": 0.3
                },
                {
                    "lightness": 10
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#047968"
                },
                {
                    "lightness": "-7"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometr	y",
            "stylers": [
                {
                    "color": "#06c5a9"
                },
                {
                    "visibility": "on"
                },
                {
                    "lightness": -15
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#06c5a9"
                },
                {
                    "lightness": "7"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#06c5a9"
                },
                {
                    "lightness": -34
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#333739"
                }
            ]
        }
    ],
    mapInfoBoxStyle: {
        color: '#08fdd8',
        backgroundColor: 'black',
        margin: '14px',
        textAlign: 'center',
        fontSize: '20px',
        fontWeight: 'bold',
        fontFamily: '"MyLogo", sans-serif',
        opacity: .85,
        padding: `12px`,
        width: '250px',
        transform: 'none',
        borderRadius: '4px'
    },

    /*flyLetter ANIMATION PROPS*/
    flyLetterStyles: {
        input: {
            height: 40,
            backgroundColor: '#ddd',
            width: 200,
            border: 'none',
            outline: 'none',
            marginBottom: 20,
            fontSize: 22,
            padding: 8,
        },
        letters: {
            position: 'absolute',
            top: -200,
            left: '7%',
            opacity: 1,
            display: 'block',
            height: 140,
            width: '32%',
            color: 'white',
        },
        letter: {
            opacity: 0,
            marginTop: '90%',
            fontSize: 16,
            fontFamily: 'monospace',
            float: 'left',
            height: 0
        }
    },
};


/*END VALIDATION MAPS FUNC*/

class Contact extends Component {
    /*VALIDATION p1*/
    constructor() {
        super();
        this.state = {
            email: '',
            msg: '',

            touched: {
                email: false,
                msg: false,
            },
            isLoading: true
        };
    };

    componentDidMount() {
        setTimeout(() => this.setState({isLoading: false}), 1500);
    }

    handleMsgChange = (evt) => {
        this.setState({msg: evt.target.value});

        const arr = [];
        this.setState(() => ({letters: arr}))
    };

    handleEmailChange = (evt) => {
        this.setState({email: evt.target.value});

        const arr = [];
        this.setState(() => ({letters: arr}))
    };
    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true},
        });
    };
    /*END VALIDATION p1*/

    /*flyLetter ANIMATION*/
    state = {
        letters: [],
    };
    onChange = (e) => {
        const arr = [];
        this.setState(() => ({letters: arr}))
    };

    /*flyLetter ANIMATION*/

    render() {
        const shouldMarkError = (field) => {

            return false;
        };
        if (this.state.isLoading) {
            return <PreloaderElement/>
        }
        return (
            <div className="contact_content">
                <div style={defaultProps.flyLetterStyles.letters}>
                    {
                        this.state.letters
                    }
                </div>
                <span className="tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                <div className="contact_main">
                    <div className="left_side">
                        <span className="tag_h1">&lt;h1&gt;</span> <br/>
                        <TextSplit className="text_h1">Contact</TextSplit>
                        <span className="tag_h1">&lt;h1/&gt;</span> <br/>
                        <TextSplit splitBy='words' className='left_side_text'>This form is UI Demo</TextSplit>
                        <form id="contact" autoComplete="off">
                            <div className="input_row">
                                <div className="half">
                                    <input onChange={this.onChange} placeholder="Name" type="text" name="name"/>
                                </div>
                                <div className="half">
                                    <input
                                        className={shouldMarkError('email') ? "error" : ""}
                                        type="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleEmailChange}
                                        onBlur={this.handleBlur('email')}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="input_row">
                                <input onChange={this.onChange} placeholder="Subject" type="text"
                                       name="subject"/>
                            </div>
                            <div className="input_row">
							<textarea placeholder="Message" name="msg" required
                                      minLength="10"
                                      className={shouldMarkError('msg') ? "error" : ""}
                                      value={this.state.msg}
                                      onChange={this.handleMsgChange}
                                      onBlur={this.handleBlur('msg')}/>
                            </div>
                            <div className="input_submit">
                                <input id="submit" type="submit" value="SEND"/>
                            </div>
                        </form>
                    </div>
                </div>
                <span className="tags">&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br/> &lt;/html&gt;</span>
            </div>
        )
    }
}

export default Contact;

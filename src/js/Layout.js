import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import {About, Contact, Header, Home, Skills, NotFound, Works} from '../js/components';
import Particles from "react-tsparticles";

import prefix from "./components/Config";

//todo browserHistory
let Layout = () => (
	<div>
		<Header/>
		<Particles
			id="tsparticles"
			options={{
				background: {
					color: {
						value: "#252627",
					},
				},
				fpsLimit: 240,
				interactivity: {
					detectsOn: "canvas",
					events: {
						onClick: {
							enable: true,
							mode: "push",
						},
						onHover: {
							enable: true,
							mode: "grab",
						},
						resize: true,
					},
					modes: {
						grab: {
							distance: 200,
							line_linked: {
								opacity: 1
							}
						},
						bubble: {
							distance: 400,
							duration: 2,
							opacity: 0.8,
							size: 40,
						},
						push: {
							quantity: 4,
						},
						repulse: {
							distance: 200,
							duration: 0.4,
						},
					},
				},
				particles: {
					color: {
						value: "#016758",
					},
					links: {
						color: "#555",
						distance: 150,
						enable: true,
						opacity: 0.5,
						width: 1,
					},
					collisions: {
						enable: true,
					},
					move: {
						enable: true,
						speed: 6,
						direction: "none",
						random: false,
						straight: false,
						out_mode: "out",
						bounce: false,
						attract: {
							enable: false,
							rotateX: 600,
							rotateY: 1200
						}
					},
					number: {
						density: {
							enable: true,
							value_area: 800,
						},
						value: 70,
					},
					opacity: {
						value: 1.0,
					},
					shape: {
						type: "circle",
					},
					size: {
						random: true,
						value: 5,
					},
				},
				detectRetina: true,
			}}
		/>
		{/*<Redirect from={""} to={prefix + ""}/>*/}
		{/*<Route path={prefix}>*/}
			<Switch>
				<Redirect from={prefix + "/index.html"} to={prefix + "/home"}/>
				<Route exact path={prefix + "/home"} component={Home}/>
				<Route exact path={prefix + "/about"} component={About}/>
				<Route exact path={prefix + "/skills"} component={Skills}/>
				<Route path={prefix + "/works"} component={Works}/>
				<Route exact path={prefix + "/contact"} component={Contact}/>
				<Route path="*" component={NotFound}/>
			</Switch>
		{/*</Route>*/}
	</div>
);

export default Layout;
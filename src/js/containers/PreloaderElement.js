import React from 'react';
import '../../css/preloader.scss';

let PreloaderElement = () => (
	<div className="preloader_content">
		<div className="preloaderbody">
		  <span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		  </span>
			<div className="base">
				<span></span>
				<div className="face"></div>
			</div>
		</div>
		<div className="longfazers">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
		<p className="preloader_text">Loading ...</p>
	</div>
);

export default PreloaderElement;
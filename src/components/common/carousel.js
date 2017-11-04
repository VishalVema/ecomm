import React from 'react';
import ReactDOM from 'react-dom';


class Carousel extends React.Component{
	render(){
		return(

				   <div className="slider">
					    <ul className="slides">
					      <li>
					        <img src="https://wallpaperscraft.com/image/avi_kaplan_pentatonix_mitch_grassi_kirstie_maldonado_scott_hoying_94750_1920x1080.jpg" />
					        <div className="caption center-align">
					          <h3>This is our big Tagline!</h3>
					          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
					        </div>
					      </li>
					      <li>
					        <img src="https://wallpaperscraft.com/image/taylor_swift_album_blonde_celebrity_1989_97512_1920x1080.jpg" />
					        <div className="caption left-align">
					          <h3>Left Aligned Caption</h3>
					          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
					        </div>
					      </li>
					      <li>
					        <img src="https://wallpaperscraft.com/image/slipknot_light_masks_image_night_6878_1920x1080.jpg" />
					        <div className="caption right-align">
					          <h3>Right Aligned Caption</h3>
					          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
					        </div>
					      </li>
					      <li>
					        <img src="https://wallpaperscraft.com/image/skillet_jen_ledger_christian_rock_john_cooper_seth_morrison_rock_93561_1920x1080.jpg" />
					        <div className="caption center-align">
					          <h3>This is our big Tagline!</h3>
					          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
					        </div>
					      </li>
					    </ul>
					  </div>


			);
	}
}


export {Carousel};

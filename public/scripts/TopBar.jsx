import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class TopBar extends React.Component {


render(){

return(


		<div className="TopBar">

				<div className="header">

					<img id ="userid" src = "../images/anoop.jpg"></img>
					<img  id ="three_dots" src ="../images/ic_more_vert_black_24dp_2x.png"></img>
					<img id ="chatbox" src="../images/ic_speaker_notes_black_24dp_2x.png"></img>
				</div> 
				<input type="text" placeholder="Search or start new chat"></input>	

		</div>


	);


}



}
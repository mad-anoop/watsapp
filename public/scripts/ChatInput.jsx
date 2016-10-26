import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


export default class  extends React.Component {


render(){

	return(
		<div className="chat_input">

			<img  id ="emoticon" src="../images/ic_insert_emoticon_black_24dp_2x.png"></img>
			<input type="text"></input>
			<img id="mic" src="../images/ic_settings_voice_black_24dp_2x.png"></img>
		</div>	

		   );

		}




}
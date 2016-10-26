import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import RtTopbar from './RtTopbar.jsx';
import ChatList from './RtChatlist.jsx';
import ChatInput from './ChatInput.jsx';


export default class  extends React.Component {


render(){

return(

	<div className="RtCol">
		< RtTopbar  />
		< ChatList  />
		< ChatInput />
	</div>	

	);

	}

}




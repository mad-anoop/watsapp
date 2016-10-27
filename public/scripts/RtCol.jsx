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
		< RtTopbar currentdp ={ this.props.currentdp} currentname ={ this.props.currentname} />
		< ChatList chat = {this.props.chat} currentchat = {this.props.currentchat} />
		< ChatInput  readChange = {this.props.readChange}/>
	</div>	

	);

	}

}




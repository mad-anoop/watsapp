import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class extends React.Component {






render(){
return(


	<div className="UserTile" onClick = {  ()=>{this.props.selectEvent(this.props.image,this.props.name,this.props.chat)}} ref ="username">

	
		<img alt="Bacon..." src={this.props.image} className="images"></img>
		

		<div className="UserName">
		{this.props.name}
		</div>

		<div className="LastSeen">
		{this.props.lastseen}
		</div>

	</div>
);

}




}





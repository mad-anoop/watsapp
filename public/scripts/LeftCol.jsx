import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import UserList from './UserList.jsx';
import TopBar from './TopBar.jsx';

export default class LeftCol extends React.Component {


render(){
return(
		<div className="LeftCol">
			< TopBar/>
			< UserList data = {this.props.data} selectEvent ={this.props.selectEvent}/>
		</div>		
	   );


     }
}
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import UserTile from './UserTile.jsx';


export default class extends React.Component {






constructor(){
super();
this.generatelayout = this.generateLayout.bind(this);
}






generateLayout(){	
const data = this.props.data;
var layout = data.map((item, i)=>{

	return < UserTile name={item.name} lastseen={item.lastSeen} image={item.img} chat={item.chat_list} selectEvent ={this.props.selectEvent}/>
		  
	
})
return layout;
}

render() {

	
    	return(    
    	<div className="UserList">	
    		 {this.generateLayout()}
    		 
    	</div>	  
    		);

		}
    


}



import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


export default class  extends React.Component {

constructor(){
super();

}




generateLayout(){	
const data = this.props.currentchat;
var layout = data.map((item,i)=>{

	return <div className="chip" key={i}> {item} </div>
		  
	
})
return layout;
}




render(){

return(


		<div className ="chatList">


			{ this.generateLayout() } 


		</div>



	);


}



}
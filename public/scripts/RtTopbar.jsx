import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';



export default class  extends React.Component {


render(){

return(

	<div className ="RtTopbar">


				<img id ="Current_user" src= {this.props.currentdp}></img>
				<span id ="curr_name">{this.props.currentname}</span>
				<img id ="Rt_threeDots" src = "../images/ic_more_vert_black_24dp_2x.png"></img>
				<img id ="attachClip" src="../images/ic_attach_file_black_24px.svg"></img>

	</div>


	);

}




}
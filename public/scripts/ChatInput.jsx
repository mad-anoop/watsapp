import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


export default class  extends React.Component {

constructor(props) {
		super(props);
		this.node = undefined;
		this.inputChange = this.inputChange.bind(this);
		}



inputChange(e){
    if(e.keyCode === 13){
             
            this.props.readChange(this.node.value)
         
   }
}




render(){

	return(
		<div className="chat_input">

			<img  id ="emoticon" src="../images/ic_insert_emoticon_black_24dp_2x.png"></img>
			<input type="text" ref={node => this.node = node} onKeyDown={this.inputChange} />
			<img id="mic" src="../images/ic_settings_voice_black_24dp_2x.png"></img>

		</div>	

		   );
		}





}
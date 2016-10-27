import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import LeftCol from './LeftCol.jsx';
import RightCol from './RtCol.jsx';

const array=[];
export default class Main extends React.Component {




constructor(){
super();
	this.state= ({data:[],loading:false,currentdp:"../images/anoop.jpg",currentname:"Anoop",chat:[],currentchat:[]});	
}

selectEvent(dp,name,chat){
this.chat=chat;
this.setState({currentdp:dp, currentname:name,currentchat:chat});

}

readChange(value){

array.push(value);
console.log(array);
this.setState({chat:array});
console.log(this.state);
}






componentWillMount() {
this.setState({data:[],loading:false});
	$.ajax({
    url: "http://localhost:8085/json/list.json",
    dataType: "json",
    success : function(val){
     this.setState({data:val,loading:true});
    }.bind(this)
	});

}







    render() {

				if(!this.state.loading){
				
					return <div>loading</div>
				
				}


if(this.state.loading){

        return ( 	< div className = "Main" >
            				< LeftCol data = {this.state.data.User_info } selectEvent = {this.selectEvent.bind(this)} />
            				< RightCol  currentdp = { this.state.currentdp} currentname={this.state.currentname} readChange={this.readChange.bind(this)} chat={this.state.chat} currentchat={this.state.currentchat} />
           		    < /div>
        );

	}


    }


}


ReactDOM.render(<Main/>, document.getElementById('app'));
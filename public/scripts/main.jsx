import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import LeftCol from './LeftCol.jsx';
import RightCol from './RtCol.jsx';

export default class Main extends React.Component {




constructor(){
super();
	this.state= ({data:[],loading:false,current:"anoop"});
	
}

selectEvent(add){

console.log(add);
this.setState({current:add});
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
            				< RightCol data ={ this.state.data.User_info} />
           		    < /div>
        );

	}


    }


}


ReactDOM.render(<Main/>, document.getElementById('app'));
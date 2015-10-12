/*
* Module dependencies
*/

import React from 'react';
import EventTable from './EventoTable'
import EventChat from './EventoChat'
import uid from 'uid'

export default	class EventApp extends React.Component{
	constructor(props){
		super(props);
		this.state={messages:[]};
		this.onSee= this.onSee.bind(this);
	}

	onSee(name){
		let message={id:uid(), text:name};
		this.state.messages.push(message);
		let messages=this.state.messages;
		this.setState({messages:messages})	;
	}
	render(){
		let events=[
			{number:1, name:'Agiles 2015', image:'agiles2015.jpg'},
			{number:2, name:'Ada Lovelace', image:"ada.jpg"},
			{number:3, name:'DevAcademy.la', image:"devacademy.jpg"},
			{number:4, name:'Buen trip', image:"buentrip.jpg"},
			{number:5, name:'Grils in tech', image:"girlsintech.png"}
		];

		return <div className="eventoapp">
			<h3 className="titulo">Eventos para asistir</h3>
		<EventTable events={events} onSee={this.onSee}/>
		<EventChat messages={this.state.messages}/>
		</div>
	}

}
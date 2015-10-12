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

	onSee(name,date,page,description){
		
		let message={id:uid(), text:name, date:date, page:page, description:description};		
	//	this.state.messages=[];
		this.state.messages.unshift(message);
		let messages=this.state.messages;
		this.setState({messages:messages})	;
	}
	render(){
		let events=[
			{number:1, name:'Agiles 2015', image:'agiles2015.jpg',date:'OCTUBRE 22-24 // MONTEVIDEO, URUGUAY', page:'http://agiles2015.agiles.org/es/?lang=es',
			description:'EL EVENTO ANUAL DE LA COMUNIDAD AGIL PREPARA SU NUEVA EDICION AGILES 2015: VIII JORNADAS LATINOAMERICANAS DE METODOLOGÍAS AGILES.Montevideo sera la ciudad que reciba las Octavas Jornadas Latinoamericanas de Metodologias Ágiles y como en las 7 ediciones anteriores reunira a los mayores referentes de Latinoamerica sobre esta tematica, asi como reconocidos exponentes de otras regiones'},
			{number:2, name:'Ada Lovelace', image:"ada.jpg",date:'Martes 13 de Octubre / 18h30', page:'http://info.thoughtworks.com/200_aniversario_Ada_lovelace_Quito.html',
			description:'El dia de Ada Lovelace es la celebracion de los logros de las mujeres en las ciencias, tecnologia, ingenieria y matematica. Ada Lovelace fue una matematica de quien se refieren como la primera persona programadora, ella apoyo en a dar forma a la tecnologia del siglo 19 y es reconocida como un icono en la historia de la computacion' },

			{number:3, name:'DevAcademy.la', image:"devacademy.jpg",date:'Todos los miercoles', page:'https://devacademy.la/', description:'Entrevistas con invitados internacionales Mas de 100 programas gratuitos, todos los miercoles en vivo por streaming'},
			{number:4, name:'Buen trip', image:"buentrip.jpg",date:'4 de junio ', page:'http://buentriphub.com/', description:' Bootcamp Lean Startup :Prueba tus ideas y nuevos productos en un Bootcamp de emprendimiento de 1 dia donde no solo aprenderas a emprender con Lean Startup pero tambien a dar los primeros pasos para posicionar tu emprendimiento con Growth Hacking'},
			{number:5, name:'Grils in tech', image:"girlsintech.png",date:'20/10/2015', page:'http://www.girlsintech.org/'}
		];

		return <div className="eventoapp">
			<h3 className="titulo">Eventos para asistir</h3>
		<EventTable events={events} onSee={this.onSee}/>
		<EventChat messages={this.state.messages}/>
		</div>
	}

}
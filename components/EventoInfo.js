/*
* Module dependencies
*/

import React from 'react';


export default	class EventInfo extends React.Component{

	render(){
			return <div className="eventInfo">
			<div>
			
					<p> Nombre</p>
					<p> {this.props.message.text}</p>
				<br/>
					<p> Donde? Cuando?</p>
					<p> {this.props.message.date} </p>
				<br/>
				
					<p> Descripcion</p>
					<p> {this.props.message.description}</p>
				<br/>
					
					<p> <a href={this.props.message.page}>{this.props.message.text}</a></p>
				<br/>
							
			</div>

			</div>
	}
}

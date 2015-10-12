/*
* Module dependencies
*/

import React from 'react';
import EventRow from './EventoRow';

export default	class EventTable extends React.Component{

			render(){
				return <ul className="eventtable">
					{
						this.props.events.map((event)=>{
							return <EventRow 
							key={event.number} 
							name={event.name} 
							image={event.image}
							date={event.date}
							page={event.page}
							description={event.description}
							see={this.props.onSee}/>
						})
					}
				</ul>						

		}
	}
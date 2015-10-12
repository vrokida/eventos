
/*
* Module dependencies
*/

import React from 'react';
import EventAvatar from './EventoAvatar';

export default class EventRow extends React.Component{
		onClick(ev){
			this.props.see.call(null, this.props.name)
		}

		render (){
				return <li className="eventrow" onClick={this.onClick.bind(this)}>
				<EventAvatar image={this.props.image}/>
				{this.props.name}
				</li>
		}
}
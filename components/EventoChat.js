/*
* Module dependencies
*/

import React from 'react/addons';
import EventInfo from './EventoInfo';

const {CSSTransitionGroup}=React.addons;

export default	class EventChat extends React.Component{
	

	render(){
		return <ul className="eventchat">
		<CSSTransitionGroup transitionName="message-animation">
			{
				this.props.messages.map((message)=>{
					return <EventInfo key={message.id} message={message}/>
				})
			}
		</CSSTransitionGroup>
		</ul>
	}
}
EventChat.defaultProps={messages:[]};
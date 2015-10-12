/*
* Module dependencies
*/

import React from 'react';


export default	class EventInfo extends React.Component{

	render(){
			return <li className="eventInfo">
			{
				this.props.message.text
			}

			</li>
	}
}

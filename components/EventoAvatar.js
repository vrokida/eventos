/*
* Module dependencies
*/

import React from 'react';

export default class EventAvatar extends React.Component{
				render (){
					var url=`images/${this.props.image}`;
					return <div className="avatar-container">
						<img src={url} className="avatar"/>
					</div>
				}
			}


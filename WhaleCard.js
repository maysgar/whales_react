import React from 'react';

export class WhaleCard extends React.Component {
	render() {

		return(
			<div id={this.props.index} className="whaleCard" onClick={this.props.onClick}>
				<img src={this.props.image} />  	
			</div>
		);
	}

}

export default WhaleCard;
import React from 'react';


class WhaleHouse extends React.Component {
	render() {
		return(
			<div className="whaleText">
				<h1>{this.props.name}</h1>
				<h2><em>{this.props.latin}</em></h2> 
				<p>{this.props.about}</p>
				<p>{this.props.age}</p>
				<p>{this.props.size}</p>
				<p>{this.props.amount}</p>
				<img src={this.props.image} />		
			</div>
		);
	}
}

export default WhaleHouse;




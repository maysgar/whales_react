import React from 'react';


class WhaleHouse extends React.Component {


	render() {

		var spanText = {
			fontWeight: "bold",
		}

		return(
			<div className="whaleText">
			    <button id="closeButton" onClick={this.props.onClick}>Close</button>
				<h1>{this.props.name}</h1>
				<h2><em>{this.props.latin}</em></h2> 
				<h3>About</h3>
				<p>{this.props.about}</p>
				<p><span style={spanText}>Lifespan: </span>{this.props.age}</p>
				<p><span style={spanText}>Size: </span>{this.props.size}</p>
				<p><span style={spanText}>Population: </span>{this.props.amount}</p>
				<img src={this.props.image} />
			</div>
		);
	}
}

export default WhaleHouse;




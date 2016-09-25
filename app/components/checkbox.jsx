const React = require ('react')

let CheckBox = React.createClass({
	propTypes: {
		option: 		React.PropTypes.object,
		activeFacets: 	React.PropTypes.array,
		handleChange: 	React.PropTypes.func,
		inputId: 		React.PropTypes.string
	},

	_handleClick: function(event){
		window.whatevs("This came from the checkbox! Valz: " + event.target.value)
	}.bind(window),

	__handleClick: function(event){
		console.log(event.target.value)
		this.props.activeFacets.push('snadder')
	},

	render: function(){
//		console.info("In checkbox: ", this.props.option);
		return <div>
			<input 
				id={this.props.option.value + '-' + this.props.option.name} 
				type="checkbox" value={this.props.option.value}
				onClick={this.props.handleChange}
				name={this.props.inputId} />
			<label htmlFor={this.props.option.value + '-' + this.props.option.name}>{this.props.option.label}</label>
		</div>
	}
});

module.exports = CheckBox
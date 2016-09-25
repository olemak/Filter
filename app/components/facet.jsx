const React = require ('react')

const CheckBox = require ('./checkbox')

let Facet = React.createClass({
	propTypes: {
		facet: React.PropTypes.object,
		handleChange: React.PropTypes.func
	},
	render: function(){
		return <form>
			<h5>{this.props.facet.label}</h5>
				{this.props.facet.items.map(function(option){
					return <CheckBox
								option=			{option}
								handleChange = 	{this.props.handleChange}
								inputId=		{this.props.facet.id}
								key=			{option.name + "-" + option.value}/>
				}.bind(this))}
		</form>
	}
});

module.exports = Facet
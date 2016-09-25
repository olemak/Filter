const React = require ('react')

let Item = React.createClass({
	propTypes: {
		item: React.PropTypes.object,
	},
	render: function(){
		return <div className="item">
			<h5>{this.props.item.name}</h5>
			<h6>{this.props.item.regularPrice}</h6>
		</div>
	}
});

module.exports = Item
const React = require ('react');

const Facet = require ('./facet')
const Item 	= require ('./item')
//const GetaFilter = require ('../functions/functions.js')
//	  GetaFilter.init()


let Filter = React.createClass({
	propTypes: {
		findResponse: React.PropTypes.object,
	},
	getInitialState: function(){
		let base = [];
		this.props.findResponse.form.facets.map((facet)=>{
			let facetId = facet.id;
			base[facetId] = []
		})
		return {activeFacets: base}
	},
	handleChange: function(event){
		let currentFacets = this.state.activeFacets;
		let currentFacetName = event.target.name;

		switch (event.target.type){
			case "checkbox":		
				if (event.target.checked) {
					currentFacets[event.target.name].push(event.target.value)
				} else {
					currentFacets[event.target.name].splice(currentFacets[event.target.name].indexOf(event.target.value), 1)
				}
				break;

				default:
				console.warn("Input type " + event.target.type + " is not supported - yet");
		}
		this.setState({activeFacets: currentFacets})
		console.log(currentFacets);
	},
	render: function(){
			return <div>
				{this.props.findResponse.form.facets.map(function(facet){
					return <Facet 
						facet={facet} 
						handleChange={this.handleChange} 
						key={facet.id + "-facet"} 
					/>
				}.bind(this))};
			<div className="items">
				<h3>Items</h3>
				{this.props.findResponse.list.items.map(function(item){
					{
					return <Item item={item} key={item.name + "-item"} />
					}
				})}
			</div>
		</div>
	}
});

module.exports = Filter
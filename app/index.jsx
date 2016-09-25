// Require needed modules
const React = 		require ('react');
const ReactDOM = 	require ('react-dom');
const Filter = 		require('./components/filter.jsx');

let findResponse;
	findResponse = '{"form": {"count": 3,"counterLabel": "items","facets": [{"label": "Color","id": "color","type": "checkbox","items": [{"label": "Red","name": "colors","value": "red"},{"label": "Green","name": "colors","value": "green"},{"label": "Blue","name": "colors","value": "blue"}]},{"label": "Price","id": "price","type": "range","items": [{"min": 100,"max": 200,"name": "price"}]}]},"list": {"emptyText": "No items found","items": [{"regularPrice": 150,"campaignPrice": 0,"brand": "My Brand","name": "Shirt","url": "#","imageUrl": "shirt.jpg"}]}}';
	findResponse = JSON.parse(findResponse)

ReactDOM.render(<Filter findResponse={findResponse}  />, window.target)
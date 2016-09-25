// Require the Filter module
const Filter = require ('./app/index.jsx');

// Make config object
const config = {};
		config.renderTarget = document.getElementById('target');  // Target Element/Node for rendered output 

// Init
Filter.init(config);

console.log(Filter);
var React = require('react');
var App = require('components/app');

window.jQuery = window.$ = require("jquery");

React.render(<App />, document.getElementById('content')
);
'use strict';
var App = require('components/app');

window.jQuery = window.$ = require('jquery');

// var attachFastClick = require('fastclick');
// attachFastClick(document.body);

// var injectTapEventPlugin = require("react-tap-event-plugin");
// injectTapEventPlugin();


React.initializeTouchEvents(true);

s.inject();

React.render(<App />, document.getElementById('content'));

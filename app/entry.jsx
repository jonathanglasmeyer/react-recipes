'use strict';
var App = require('components/app');
let d = require('jsnox')(React);
let pt = require('react').PropTypes;

window.jQuery = window.$ = require('jquery');
window.d = d;

// var attachFastClick = require('fastclick');
// attachFastClick(document.body);

// var injectTapEventPlugin = require("react-tap-event-plugin");
// injectTapEventPlugin();


React.initializeTouchEvents(true);

s.inject();

React.render(d(App), document.getElementById('content'));

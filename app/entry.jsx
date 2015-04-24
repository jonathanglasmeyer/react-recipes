'use strict';
var App = require('components/app');
var d = require('jsnox')(React);
var pt = require('react').PropTypes;

window.d = d;

React.initializeTouchEvents(true);

React.render(d(App), document.getElementById('content'));

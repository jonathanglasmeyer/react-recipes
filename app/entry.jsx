'use strict';
var AppController = require('./components/app_controller.jsx');
var d = require('jsnox')(React);

window.d = d;

// React.initializeTouchEvents(true);
require('react-tap-event-plugin')();

React.render(d(AppController), document.getElementById('content'));

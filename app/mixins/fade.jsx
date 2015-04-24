'use strict';
require('styles/fade');
require('styles/slidein');

var ReactCSSTransitionGroup = require('react/addons').addons.CSSTransitionGroup;

module.exports = {
    fading(component) {
        return <ReactCSSTransitionGroup transitionName='fade'>
                  {component}
              </ReactCSSTransitionGroup>;
    }
};

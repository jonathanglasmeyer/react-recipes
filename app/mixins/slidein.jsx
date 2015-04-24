'use strict';
require('styles/slidein');

var ReactCSSTransitionGroup = require('react/addons').addons.CSSTransitionGroup;

module.exports = {
    slidein(component) {
        return <ReactCSSTransitionGroup transitionName='fade'>
                  {component}
              </ReactCSSTransitionGroup>;
    }
};

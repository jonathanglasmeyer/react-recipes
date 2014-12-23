'use strict';
require('styles/fade');

let ReactCSSTransitionGroup = require('react/addons').addons.CSSTransitionGroup;

module.exports = {
    fading(component) {
        return <ReactCSSTransitionGroup transitionName='fade'>
                  {component}
              </ReactCSSTransitionGroup>;
    }
};

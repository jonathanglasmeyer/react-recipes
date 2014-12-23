'use strict';
require('styles/slidein');

let ReactCSSTransitionGroup = require('react/addons').addons.CSSTransitionGroup;

module.exports = {
    slidein(component) {
        return <ReactCSSTransitionGroup transitionName='slidein'>
                  {component}
              </ReactCSSTransitionGroup>;
    }
};

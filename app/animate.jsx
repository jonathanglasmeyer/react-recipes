'use strict';
require('styles/fade');
require('styles/fade-slow');
require('styles/slidein');
require('styles/slidein-small');
require('styles/slidein-small-left');

var ReactCSSTransitionGroup = require('react/addons').addons.CSSTransitionGroup;


module.exports = {

    fading(component) {
        return <ReactCSSTransitionGroup transitionName='fade' key={3}>
                  {component}
              </ReactCSSTransitionGroup>;
    },

    fadingSlow(component) {
        return <ReactCSSTransitionGroup transitionName='fade-slow' key={3}>
                  {component}
              </ReactCSSTransitionGroup>;
    },

    slidein(component) {
        return <ReactCSSTransitionGroup transitionName='slidein' key={3}>
                  {component}
              </ReactCSSTransitionGroup>;
    },

    slideinSmall(component) {
        return <ReactCSSTransitionGroup transitionName='slidein-small'>
                  {component}
              </ReactCSSTransitionGroup>;
    },

    slideinSmallLeft(component) {
        return <ReactCSSTransitionGroup transitionName='slidein-small-left'>
                  {component}
              </ReactCSSTransitionGroup>;
    }
};

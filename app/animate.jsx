'use strict';
require('styles/fade');
require('styles/fade-slow');
require('styles/slidein');
require('styles/slidein-small');
require('styles/slidein-small-left');

let ReactCSSTransitionGroup = require('react/addons').addons.CSSTransitionGroup;

module.exports = {

    fading(component) {
        return <ReactCSSTransitionGroup transitionName='fade'>
                  {component}
              </ReactCSSTransitionGroup>;
    },

    fadingSlow(component) {
        return <ReactCSSTransitionGroup transitionName='fade-slow'>
                  {component}
              </ReactCSSTransitionGroup>;
    },

    slidein(component) {
        return <ReactCSSTransitionGroup transitionName='slidein'>
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

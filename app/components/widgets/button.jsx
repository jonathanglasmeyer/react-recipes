'use strict';

require('styles/button.less');

var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var Tappable = require('react-tappable');
var cx = require('react/addons').addons.classSet;
var helpers = require('helpers');
import {Element, Color, Dimen, Values} from 'styles/vars.js';
var C = require('color');
import {StyleResolverMixin, BrowserStateMixin} from 'radium';

const COLORS = {red: '#F44336', green: '#5C832F'};

import {PropTypes} from 'react';

const outerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  height: Dimen.Button.touchHeight

};

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  height: Dimen.Button.height,
  padding: '0 8px',
  borderRadius: 2,

  fontFamily: Values.fontFamilySans,
  fontSize: 14,
  fontWeight: 600,
  letterSpacing: .7,
  textTransform: 'uppercase',
  color: Color.primaryDark,



  modifiers: [
  {
    inactive: {
      color: C(Color.primaryDark).alpha(0.26).rgbString(),
      cursor: 'default'
    }
  }, 
  {
    active: {
      states: Element.Button.states,
      cursor: 'pointer',
    }
  }
  ]

};

let Button = React.createClass({

  propTypes: {
    onClick: PropTypes.func,
    inactive: PropTypes.bool,
    children: PropTypes.string.isRequired
  },

  mixins: [StyleResolverMixin, BrowserStateMixin, PureRenderMixin],

  render() {
    const style = this.buildStyles(styles, {active: !this.props.inactive});
    const {onClick, children} = this.props;
    const text = children || 'empty';

    return d('div', {style: outerStyles, onClick},
      d('div', Object.assign({style}, this.getBrowserStateEvents()), text));
  }

});

module.exports = Button;

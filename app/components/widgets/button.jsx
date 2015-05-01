'use strict';

require('styles/button.less');

var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var Tappable = require('react-tappable');
var cx = require('react/addons').addons.classSet;
var helpers = require('helpers');
import {Element, Color, Dimen, Values} from 'styles/vars.js';
var c = require('color');
import {makeStates} from '../../styles/helpers.js';
import {Style, StyleResolverMixin, BrowserStateMixin} from 'radium';
import tappable from '../utils/tappable.js';

const COLORS = {red: '#F44336', green: '#5C832F'};

import {PropTypes} from 'react';

const outerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 8,
  marginBottom: 8,
  borderRadius: 2,
  height: Dimen.Button.height,
};

const color = Color.accent2;
const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  height: Dimen.Button.height,
  padding: '0 4px',

  fontFamily: Values.fontFamilySans,
  fontSize: 14,
  fontWeight: 600,
  letterSpacing: .7,
  textTransform: 'uppercase',
  color,


  modifiers: [{
    active: {
      states: makeStates(color, 0.08, 0.15),
    }
  }]
};

const activeStyle = {background: c(color).alpha(0.1).rgbString()};

let Button = React.createClass({
  displayName: 'Button',

  propTypes: {
    onClick: PropTypes.func,
    children: PropTypes.string.isRequired
  },

  mixins: [StyleResolverMixin, BrowserStateMixin, PureRenderMixin],

  render() {
    const style = this.buildStyles(styles, {active: !this.props.inactive});
    const {onClick, children} = this.props;
    const text = children || 'empty';

    return d('div.outerButton', Object.assign({style: outerStyles}, this.props, this.getBrowserStateEvents()),
      d('div.innerButton', {style}, text));
    
  }

});

module.exports = tappable(Button, outerStyles, activeStyle);

import {PropTypes} from 'react';
var c = require('color');
const color = Color.accent2;
import {Element, Color, Dimen, Values} from 'styles/vars.js';
import {Style, StyleResolverMixin, BrowserStateMixin} from 'radium';
var Tappable = require('react-tappable');

export default (component, style, activeStyle) => React.createClass({
  displayName: component.displayName + 'TappableWrapper',

  propTypes: {
    onClick: PropTypes.func,
    children: PropTypes.string.isRequired
  },

  render() {
    const name = component.displayName;
    const rules = [ {
      [`.${name}-active`]: activeStyle
    }];

    return d('div.tappableWrapper', {}, [
      d(Style, {rules}),
      d(Tappable, {
        className: name,
        classBase: name,
        component,
        style,
        onTap: this.props.onClick,
        preventDefault: true
      }, this.props.children)
    ]);

  }

})


'use strict';

import React, {PropTypes} from 'react';
import {StyleResolverMixin} from 'radium';
import {Element, Color, Dimen, Values} from 'styles/vars.js';

const styles = {
  display: 'flex',
  alignItems: 'center',
  flexGrow: 1,

  height: '100%',
  fontSize: Element.Body.fontSize,

  modifiers: [
    {centered: {justifyContent: 'center'}}
  ]
};

const ListItemMiddle = React.createClass({
  displayName: 'ListItemMiddle',

  propTypes: {
    children: PropTypes.element,
    centered: PropTypes.bool
  },

  mixins: [StyleResolverMixin],

  render() {
    const style = this.buildStyles(styles);
    const {onClick} = this.props;
    // const child = this.props.children || d('span', {}, 'This is the middle');

    return d('div', {style, onClick}, this.props.children);
  }

});

module.exports = ListItemMiddle;


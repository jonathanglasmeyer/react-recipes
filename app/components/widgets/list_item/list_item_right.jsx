'use strict';

import React, {PropTypes} from 'react';
import {StyleResolverMixin} from 'radium';
import {Element, Dimen, Values} from 'styles/vars.js';

const styles = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',

  border: Element.ListItem.debugBorder,
  paddingRight: Dimen.ListItem.paddingLeftRight,

  height: '100%',
  minWidth: Dimen.ListItem.rightDivSize,
};

const ListItemRight = React.createClass({
  displayName: 'ListItemRight',

  propTypes: {
    children: PropTypes.element
  },

  mixins: [StyleResolverMixin],

  render() {
    const style = this.buildStyles(styles);
    const {onClick} = this.props;
    // const child = this.props.children || d('div', {style: {width: 24, height: 24, background: 'grey'}});
    // child should be 24*24

    return d('div', {style, onClick}, this.props.children);
  }

});

module.exports = ListItemRight;

'use strict';

import React, {PropTypes} from 'react';
import {StyleResolverMixin} from 'radium';
import {Element, Dimen, Values} from 'styles/vars.js';

const styles = {
  display: 'flex',
  alignItems: 'center',

  height: '100%',
  minWidth: Dimen.ListItem.leftDivSize,
  paddingLeft: Dimen.ListItem.paddingLeftRight,

  border: Element.ListItem.debugBorder,

};

const ListItemLeft = React.createClass({
  displayName: 'ListItemLeft',

  propTypes: {
    children: PropTypes.element
  },

  mixins: [StyleResolverMixin],

  render() {
    const style = this.buildStyles(styles);
    const {onClick} = this.props;
    // const child = this.props.children || d('div', {style: {width: 30, height: 30, background: 'grey', borderRadius: '50%'}});
    const child = this.props.children || null;

    return d('div', {style, onClick}, child);
  }

});

module.exports = ListItemLeft;

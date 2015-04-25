'use strict';

require('styles/item.less');
require('styles/checkbox.less');


import {PropTypes} from 'react';
import {Element, Colors, Dimen} from 'styles/vars.js';

import {StyleResolverMixin, BrowserStateMixin} from 'radium';

import ListItemLeft from './list_item/list_item_left.jsx';
import ListItemMiddle from './list_item/list_item_middle.jsx';
import ListItemRight from './list_item/list_item_right.jsx';

const BRIGHT = [255, 250, 245];
const DARK = [66, 65, 64];

const styles = {
  display: 'flex',
  alignItems: 'center',

  height: Dimen.ListItem.height,
  width: '100%',

  transition: 'all .2s ease-out',
  modifiers: [{oneClickTarget: {
    cursor: 'pointer',
    states: Element.ListItem.states
  }}]
};

let ListItem = React.createClass({

  displayName: 'ListItem',

  propTypes: {
    color: PropTypes.string, // hex
    id: PropTypes.string, // the html id attribute
    cursor: PropTypes.string,
    left: PropTypes.element,
    middle: PropTypes.element,
    right: PropTypes.element,
    onClickLeft: PropTypes.func,
    onClickMiddle: PropTypes.func,
    onClickRight: PropTypes.func,
    onClickWhole: PropTypes.func,
    middleCentered: PropTypes.bool
  },

  mixins: [StyleResolverMixin, BrowserStateMixin],

    getDefaultProps() {
      return {
        id: null,
        color: '',
        style: {},
        onClickLeft: null,
        onClickMiddle: null,
        onClickRight: null,
        onClickWhole: null
      };
    },

  render() {
    let style = Object.assign(
        this.props.color ? h.categoryColor(this.props.color) : {},
        this.buildStyles(styles, {
          oneClickTarget: this.props.onClickWhole != null
        }),
        this.props.style);

    const {
      left, middle, right, middleCentered,
      onClickLeft, onClickMiddle, onClickRight, onClickWhole
    } = this.props;

    const maybeOnClickLeft = left ? onClickLeft : null;
    const maybeOnClickMiddle = middle ? onClickMiddle : null;
    const maybeOnClickRight = right ? onClickRight : null;

    return d('li', Object.assign({style, onClick: onClickWhole}, this.getBrowserStateEvents()), [
      d(ListItemLeft, {onClick: maybeOnClickLeft}, left),
      d(ListItemMiddle, {centered: middleCentered, onClick: maybeOnClickMiddle}, middle),
      d(ListItemRight, {onClick: maybeOnClickRight}, right)
    ]);
  }
});


module.exports = ListItem;

/* @flow */
'use strict';

var ListItem = require('../widgets/list_item.jsx');
var Checkbox = require('./checkbox.jsx');
var pt = require('react').PropTypes;


let ShoppingListItem = React.createClass({

  propTypes: {
    item: pt.object
  },


  render() {
    // const color = this.props.item.category.color;
    const {item} = this.props;

    return d(ListItem, {
      left: d(Checkbox, {checked: item.checked}),
      middle: d('span', item.text),
      onClickWhole: this._handleClick
    });

    // return d('div.label-wrap', {onClick: this.handleCheck},
    //     d('label', {className}, [
    //       d(Checkbox, {color: this.props.color, checked: item.checked}),
    //       d('span.label-text', {}, item.text)]));

  },

  _handleClick() {
    Actions.check(this.props.item.key, !this.props.item.checked);
  },

});

module.exports = ShoppingListItem;

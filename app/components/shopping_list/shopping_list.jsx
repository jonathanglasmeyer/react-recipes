'use strict';
require('styles/list.less');

import {PropTypes} from 'react';

var ShoppingListInput = require('./shopping_list_input.jsx');
var ShoppingListHeader = require('./shopping_list_header.jsx');
var ShoppingListItem = require('./shopping_list_item.jsx');
var ShoppingListFooter = require('./shopping_list_footer.jsx');
var List = require('../widgets/list.jsx');


let ShoppingList = React.createClass({

  displayName: 'ShoppingList',

  propTypes: {
    items: PropTypes.array
  },

  render() {
    const {items} = this.props;

    return d(List, {}, [
        d(ShoppingListHeader, {items}),
        d(ShoppingListInput),
        h.itemComponentList(this.props.items, ShoppingListItem, 2),
        d(ShoppingListFooter, {items})
    ]);
  }

});

module.exports = ShoppingList;

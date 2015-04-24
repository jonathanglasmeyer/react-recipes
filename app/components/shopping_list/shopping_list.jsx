'use strict';
require('styles/list.less');


var ListInput = require('../widgets/list_input.jsx');
var ShoppingListHeader = require('./shopping_list_header.jsx');
var ShoppingListItem = require('./shopping_list_item.jsx');
var ShoppingListFooter = require('./shopping_list_footer.jsx');
var List = require('../widgets/list.jsx');

var pt = require('react').PropTypes;

let ShoppingList = React.createClass({
    displayName: 'ShoppingList',

    propTypes: {items: pt.array},

    childContextTypes: {
        height: pt.number.isRequired,
        isOpen: pt.bool.isRequired,
    },

    getChildContext() {
        return {height: this.height(), isOpen: true};
    },

    itemCount()  { return this.props.items.length; },
    itemStartI() { return 2; },
    height()     { return Math.max(470, this.props.items.length * 50 + 156); },


    render() {
        return d(List, {footer: d(ShoppingListFooter)}, [
            d(ShoppingListHeader, this.props),
            d(ListInput),
            a.fadingSlow(
                h.itemComponentList(this.props.items, ShoppingListItem, 2))]);
    }
});
module.exports = ShoppingList;

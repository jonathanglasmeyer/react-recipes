'use strict';
require('styles/list.less');


let ListInput = require('components/list_input');
let ShoppingListHeader = require('components/shopping_list_header');
let ShoppingListItem = require('components/shopping_list_item');
let ShoppingListFooter = require('components/shopping_list_footer');
let ListWrap = require('components/list_wrap');

let pt = require('react').PropTypes;

let ShoppingList = React.createClass({
    displayName: 'ShoppingList',

    propTypes: {
        items: pt.array
    },

    childContextTypes: {
        height: pt.number.isRequired,
        isOpen: pt.bool.isRequired,
    },

    getChildContext() {
        return {
            height: this.height(),
            isOpen: true
        };
    },

    itemCount() {
        return this.props.items.length;
    },

    itemStartI() {
        return 2;
    },

    height() {
        return Math.max(470, this.props.items.length * 50 + 156);
    },

    render() {

        return d(ListWrap, {footer: d(ShoppingListFooter)}, [
            d(ShoppingListHeader, this.props),
            d(ListInput),
            h.itemComponentList(this.props.items, ShoppingListItem, 2)]);

    }
});
module.exports = ShoppingList;

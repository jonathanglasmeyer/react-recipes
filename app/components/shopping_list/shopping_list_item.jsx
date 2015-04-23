/* @flow */
'use strict';
require('styles/item');
require('styles/checkbox');

let ItemWrap = require('components/item_wrap');
let CheckboxLabel = require('components/checkbox_label');

let pt = require('react').PropTypes;

let ShoppingListItem = React.createClass({

    propTypes: {
        item: pt.object,
        i: pt.number.isRequired,
    },

    childContextTypes: {
        item: pt.object.isRequired,
        i: pt.number.isRequired
    },

    getChildContext() {
        return {
            item: this.props.item,
            i: this.props.i
        };
    },


    render() {
        let color = this.props.item.category.color;

        return d(ItemWrap, {color}, d(CheckboxLabel));
    },
});

module.exports = ShoppingListItem;

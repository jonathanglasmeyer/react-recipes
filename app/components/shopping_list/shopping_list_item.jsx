/* @flow */
'use strict';
require('styles/item');
require('styles/checkbox');

var Item = require('../widgets/item.jsx');
var CheckboxLabel = require('components/checkbox_label');

var pt = require('react').PropTypes;

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

        return d(Item, {color}, d(CheckboxLabel));
    },
});

module.exports = ShoppingListItem;

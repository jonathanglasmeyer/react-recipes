/* @flow */
'use strict';

var ListItem = require('../widgets/list_item.jsx');
var CheckboxLabel = require('./checkbox_label.jsx');

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

        return d(ListItem, {color}, d(CheckboxLabel));
    },
});

module.exports = ShoppingListItem;

/* @flow */
'use strict';
require('styles/item');
require('styles/checkbox');

let pt = require('react').PropTypes;

let ItemWrap = require('components/item_wrap');
let EditableLabel = require('components/editable_label');

let RecipeListItem = React.createClass({
    displayName: 'RecipeListItem',

    propTypes: {
        item: pt.object,
        i: pt.number.isRequired,
    },

    contextTypes: {
        recipeKey: pt.string.isRequired,
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

        return d(ItemWrap, {color, cursor: 'text', opacity: this.context.itemOpacity},
            d(EditableLabel));
    },
});

module.exports = RecipeListItem;

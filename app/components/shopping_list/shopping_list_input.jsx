'use strict';
require('styles/input');
require('styles/item');

var ListItem = require('../widgets/list_item.jsx');
var ListInput = require('../widgets/list_input.jsx');

var pt = require('react').PropTypes;

let ShoppingListInput = React.createClass({

    displayName: 'ShoppingListInput',

    contextTypes: {recipeKey: pt.string},

    handleSubmit(text) {
        if (_.isUndefined(this.context.recipeKey)) {
            Actions.addItem(text);
        } else {
            Actions.addToRecipe(text, this.context.recipeKey);
        }
    },

    render() {
        return d(ListInput, {
            placeholder: 'Artikel',
            handleSubmit: this.handleSubmit
        });
    }
});

module.exports = ShoppingListInput;

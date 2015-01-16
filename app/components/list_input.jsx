'use strict';
require('styles/input');
require('styles/item');

let ItemWrap = require('components/item_wrap');
let InputWrap = require('components/input_wrap');

let LinkedStateMixin = require('react/addons').addons.LinkedStateMixin;

let pt = require('react').PropTypes;

let ListInput = React.createClass({
    displayName: 'ListInput',

    mixins: [LinkedStateMixin],

    contextTypes: {
        recipeKey: pt.string
    },

    getInitialState() {
        return {
            inputText: ''
        };
    },

    handleFocus: Actions.setActiveInput,

    handleSubmit(text) {
        if (_.isUndefined(this.context.recipeKey)) {
                Actions.addItem(text);
            } else {
                Actions.addToRecipe(text, this.context.recipeKey);
        }
    },

    render() {
        return d(ItemWrap, {id: 'li-input', i: 1},
            d(InputWrap, {
                onSubmit: this.handleSubmit,
                placeholder: 'Artikel',
                drawSymbol: true,
                resetAfterSubmit: true,
                id: 'input-item'}));

    }
});
module.exports = ListInput;

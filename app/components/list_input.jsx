'use strict';
require('styles/input');
require('styles/item');

let Item = require('./widgets/item.jsx');
let Input = require('./widgets/input.jsx');

let pt = require('react').PropTypes;

let ListInput = React.createClass({
    displayName: 'ListInput',

    contextTypes: {recipeKey: pt.string},

    handleSubmit(text) {
        if (_.isUndefined(this.context.recipeKey)) {
                Actions.addItem(text);
            } else {
                Actions.addToRecipe(text, this.context.recipeKey);
        }
    },

    render() {
        return d(Item, {id: 'li-input', i: 1},
    d(Input, {
                onSubmit: this.handleSubmit,
                placeholder: 'Artikel',
                drawSymbol: true,
                resetAfterSubmit: true,
                className: 'input-form input-form-item',
                id: 'input-item'}));
    }
});
module.exports = ListInput;

'use strict';
require('styles/list_header');
let InputWrap = require('components/input_wrap');

let pt = require('react').PropTypes;

let TitleEdit = React.createClass({
    displayName: 'TitleEdit',

    contextTypes: {
        recipe: pt.object.isRequired
    },

    handleSubmit(text) {
        Actions.renameRecipe(this.context.recipe.key, text);
        if (this.context.recipe.items.length > 0) {
            Actions.endEditMode();
        }
    },

    render() {
        return d(InputWrap, {
            onSubmit: this.handleSubmit,
            initial: this.context.recipe.title,
            autoSubmit: true,
            placeholder: 'Neues Rezept',
            id: 'input-title',
            className: 'input-form input-form-title' });
    }
});
module.exports = TitleEdit;

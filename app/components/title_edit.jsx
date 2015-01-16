'use strict';
require('styles/list_header');
let InputWrap = require('components/input_wrap');

let pt = require('react').PropTypes;

let LinkedStateMixin = require('react/addons').addons.LinkedStateMixin;
let TitleEdit = React.createClass({
    displayName: 'TitleEdit',

    mixins: [LinkedStateMixin],

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
            id: 'input-title',
            className: 'input-form-title' });
    }
});
module.exports = TitleEdit;

'use strict';
require('styles/list_header');

let pt = require('react').PropTypes;

let LinkedStateMixin = require('react/addons').addons.LinkedStateMixin;
let TitleEdit = React.createClass({
    displayName: 'TitleEdit',

    mixins: [LinkedStateMixin],

    contextTypes: {
        recipe: pt.object.isRequired
    },

    getInitialState() {
        return {
            inputText: this.context.recipe.title
        };
    },


    handleSubmit(e) {
        e.preventDefault();

        if (this.state.inputText) {
            Actions.renameRecipe(this.state.inputText);
        }
    },

    render() {
        let valueLink = this.linkState('inputText');
        return d('form.input-form-title', {onSubmit: this.handleSubmit},
            d('input:text#input-title', {valueLink}));
    }
});
module.exports = TitleEdit;

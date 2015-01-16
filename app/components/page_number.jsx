'use strict';
require('styles/list_header');
require('styles/input');

let pt = require('react').PropTypes;
let LinkedStateMixin = require('react/addons').addons.LinkedStateMixin;

let PageNumber = React.createClass({

    mixins: [LinkedStateMixin],
    displayName: 'PageNumber',

    contextTypes: {
        recipe: pt.object.isRequired,
    },

    getInitialState() {
        return {
            inputText: this.context.recipe.meta
        };
    },

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.inputText) {
            Actions.setMeta(this.context.recipe.key, this.state.inputText);
            this.refs.input.getDOMNode().blur();
        }
    },

    componentWillUnmount() {
        if (this.state.inputText !== this.props.children) {
            Actions.setMeta(this.context.recipe.key, this.state.inputText);
        }
    },

    render() {
        let onSubmit = this.handleSubmit;
        return d('form.input-form-meta.meta', {onSubmit},
            d('input:text#input-meta',
              {ref: 'input', valueLink: this.linkState('inputText')}));
    }
});
module.exports = PageNumber;

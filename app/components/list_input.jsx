'use strict';

require('styles/input');

let Svg = require('components/svg');
let ItemWrap = require('components/item_wrap');

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


    handleSubmit(e) {
        e.preventDefault();

        if (this.state.inputText) {
            if (_.isUndefined(this.context.recipeKey)) {
                Actions.addItem(this.state.inputText);
            } else {
                Actions.addToRecipe(this.state.inputText, this.context.recipeKey);
            }
            this.setState({inputText:''});
        }
    },

    render() {
        let onSubmit = this.handleSubmit,
            placeholder = 'Artikel',
            valueLink = this.linkState('inputText');

        return d(ItemWrap, {id: 'li-input', i: 1},
            d('form.input-form', {onSubmit}, [
                d(Svg, {className: 'plus-icon', fname: 'add'}),
                d('input:text#input-item', {placeholder, valueLink})]));
    }
});
module.exports = ListInput;

'use strict';

let pt = require('react').PropTypes;
let LinkedStateMixin = require('react/addons').addons.LinkedStateMixin;

let ItemEditForm = React.createClass({
    displayName: 'ItemEditForm',
    mixins: [LinkedStateMixin],

    contextTypes: {
        recipeKey: pt.string.isRequired,
        item: pt.object.isRequired,
    },

    getInitialState() {
        return {inputText: this.context.item.text};
    },

    componentDidMount() {
        this.refs.input.getDOMNode().focus();
    },


    handleSubmit(e) {
        e.preventDefault();

        if (this.state.inputText) {
            Actions.renameRecipeItem(this.context.recipeKey, 
                 this.context.item.key, this.state.inputText);
            Actions.setActiveItem(null);
        }
    },

    render() {
        let onSubmit = this.handleSubmit;
        let style = {border: 'none'};

        return d('form.input-form-title.input-form-item', {onSubmit},
            d('input:text#input-title.input-item',
              {valueLink: this.linkState('inputText'), style, ref:'input'}));

    }
});
module.exports = ItemEditForm;

'use strict';

var Input = require('../widgets/input.jsx');

var pt = require('react').PropTypes;

let ItemEditForm = React.createClass({
    displayName: 'ItemEditForm',

    contextTypes: {
        recipeKey: pt.string.isRequired,
        item: pt.object.isRequired,
    },

    getInitialState() {
        return {inputText: this.context.item.text};
    },

    // componentDidMount() {
    //     this.refs.input.getDOMNode().focus();
    // },


    handleSubmit(e) {
        Actions.renameRecipeItem(this.context.recipeKey,
             this.context.item.key, this.state.inputText);
        Actions.setActiveItem(null);
    },

    render() {

        // return d('form.input-form-title.input-form-edit-item', {onSubmit},
        //     d('input:text#input-title.input-item',
        //       {valueLink: this.linkState('inputText'), style, ref:'input'}));

        return d(Input, {
            onSubmit: this.handleSubmit,
            initial: this.context.item.text,
            className: 'input-form-title input-form-edit-item',
            id: 'input-item'});


    }
});
module.exports = ItemEditForm;

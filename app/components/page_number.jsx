'use strict';
require('styles/list_header');
require('styles/input');

let pt = require('react').PropTypes;
// let LinkedStateMixin = require('react/addons').addons.LinkedStateMixin;
let Input = require('./widgets/input.jsx');

let PageNumber = React.createClass({
    displayName: 'PageNumber',

    contextTypes: {
        recipe: pt.object.isRequired,
    },

    // getInitialState() {
    //     return {
    //         inputText: this.context.recipe.meta
    //     };
    // },

    handleSubmit(text) {
        Actions.setMeta(this.context.recipe.key, text);
    },


    render() {
        // return d('form.input-form-meta.meta', {onSubmit},
        //     d('input:text#input-meta',
        //       {ref: 'input', onFocus, valueLink: this.linkState('inputText')}));
return d(Input, {
            onSubmit: this.handleSubmit,
            initial: this.context.recipe.meta,
            placeholder: 'ID',
            autoSubmit: true,
            className: 'input-form-meta meta',
            id: 'input-meta'});
    }
});
module.exports = PageNumber;

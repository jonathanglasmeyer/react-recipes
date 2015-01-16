'use strict';
require('styles/input');
require('styles/item');
require('styles/svg');
let Svg = require('components/svg');

let LinkedStateMixin = require('react/addons').addons.LinkedStateMixin;

let pt = require('react').PropTypes;

let InputWrap = React.createClass({
    displayName: 'InputWrap',

    mixins: [LinkedStateMixin],

    propTypes: {
        initial: pt.string,
        onSubmit: pt.func.isRequired,
        drawSymbol: pt.bool,
        placeholder: pt.string,
        resetAfterSubmit: pt.bool,
        id: pt.string.isRequired, // html id
        className: pt.string
    },

    getDefaultProps() {
        return {
            initial: '',
            drawSymbol: false,
            className: '',
            placeholder: null,
            resetAfterSubmit: false
        };
    },

    getInitialState() {
        return {
            inputText: this.props.initial
        };
    },

    handleFocus() {
        Actions.setActiveInput();
    },

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.inputText) {
            this.props.onSubmit(this.state.inputText);

            if (this.props.resetAfterSubmit) {
                this.setState({inputText: this.props.initial});
            }
        }
    },


    render() {

        let {id, placeholder} = this.props,
            valueLink = this.linkState('inputText'),
            onFocus = this.handleFocus;

        let plusSymbol = d(Svg,
           {className: 'plus-icon', fname: 'add', onClick: this.handleSubmit});

        return d('form', {
            className: 'input-form ' + this.props.className,
            autoComplete: 'off',
            onSubmit: this.handleSubmit}, [

            this.props.drawSymbol ? plusSymbol : null,
            d('input:text', {id, onFocus, placeholder, valueLink})]);

    }
});
module.exports = InputWrap;

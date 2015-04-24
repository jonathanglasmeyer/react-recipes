'use strict';
require('styles/input');
require('styles/item');
require('styles/svg');
var Svg = require('components/svg');

var LinkedStateMixin = require('react/addons').addons.LinkedStateMixin;

var pt = require('react').PropTypes;

let Input = React.createClass({
    displayName: 'Input',

    mixins: [LinkedStateMixin],

    propTypes: {
        initial: pt.string,
        onSubmit: pt.func.isRequired,
        placeholder: pt.string,

        drawSymbol: pt.bool, // default: false
        resetAfterSubmit: pt.bool, // default: false
        autoSubmit: pt.bool, //default: false

        id: pt.string, // html id
        className: pt.string
    },

    getDefaultProps() {
        return {
            initial: '',
            drawSymbol: false,
            id: null,
            placeholder: null,
            resetAfterSubmit: false,
            autoSubmit: false
        };
    },

    getInitialState() {
        return { inputText: this.props.initial };
    },

    handleFocus() {
        Actions.setActiveInput();
        Actions.startEditMode();
    },

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.inputText) {
            this.props.onSubmit(this.state.inputText);

            if (this.props.resetAfterSubmit) {
                this.setState({inputText: this.props.initial});
            } else {
                this.refs.input.getDOMNode().blur();
            }
        }
    },

    componentWillUnmount() {
        if (this.props.autoSubmit && this.state.inputText !== this.props.initial) {
            this.props.onSubmit(this.state.inputText);
        }
    },

    render() {

        let {id, placeholder} = this.props,
            valueLink = this.linkState('inputText'),
            onFocus = this.handleFocus;

        let plusSymbol = d(Svg,
           {className: 'plus-icon', fname: 'add', onClick: this.handleSubmit});

        return d('form', {
            className: this.props.className || 'input-form ',
            autoComplete: 'off',
            onSubmit: this.handleSubmit}, [

            this.props.drawSymbol ? plusSymbol : null,
            d('input:text', {id, onFocus, ref: 'input', placeholder, valueLink})]);

    }
});
module.exports = Input;

'use strict';
require('styles/input');
require('styles/item');
require('styles/svg');

var LinkedStateMixin = require('react/addons').addons.LinkedStateMixin;
import {StyleResolverMixin} from 'radium';
import {Element, Dimen, Values} from 'styles/vars.js';
var pt = require('react').PropTypes;



const styles = {
  border: 0,
  outline: 0,
  margin: 0,
  padding: 0,
  background: Element.List.background,
  fontFamily: Values.fontFamily,
};

let Input = React.createClass({
  displayName: 'Input',

  mixins: [LinkedStateMixin, StyleResolverMixin],

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

      const style = this.buildStyles(styles);
      const {id, placeholder} = this.props;

      const valueLink = this.linkState('inputText');
      const onFocus = this.handleFocus;

      return d('form', {
        style: {display: 'flex'},
        autoComplete: 'off',
        onSubmit: this.handleSubmit},

        d('input:text', {
          style, onFocus, placeholder, valueLink,
          ref: 'input'
        }));

    }
});

module.exports = Input;

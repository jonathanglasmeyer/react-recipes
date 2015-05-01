'use strict';
// require('styles/list_header');
// require('./shopping_list_title.less');
import {StyleResolverMixin} from 'radium';
import {Element, Color, Dimen, Values} from 'styles/vars.js';

var pt = require('react').PropTypes;

const styles = {
  fontWeight: 600,
  fontSize: Element.Title.fontSize,
  fontFamily: "'Roboto'",

  modifiers: [{
    white: {color: 'white'}
  }, {
    header: {
      fontWeight: 400,
      fontSize: Element.Header.fontSize}
  }]
};

let Title = React.createClass({

  displayName: 'Title',

  mixins: [StyleResolverMixin],

  propTypes: {
    children: pt.string.isRequired,
    white: pt.bool
  },

    render() {
      const text = this.props.children;
      const style = this.buildStyles(styles);

      return d('span', {style}, text);
    }
});
module.exports = Title;

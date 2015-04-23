'use strict';
// require('styles/list_header');
require('./shopping_list_title.less');

let pt = require('react').PropTypes;

let Title = React.createClass({
  displayName: 'Title',

  propTypes: {
    children: pt.string.isRequired,
    onClick: pt.func
  },

  handleTitleClick() {
    if (this.props.isOpen) {
      Actions.setOpenRecipe(null);
    } else {
      Actions.setOpenRecipe(this.context.recipeKey);
    }
  },

    render() {
      const text = this.props.children;
      const fontSize = (text) => 100 - Math.max(text.length-23, 0) * 0.3;
      const style = {fontSize: `${fontSize(text)}%`};
      const onClick = this.props.onClick;

      return d('span#caption', {style, onClick}, text);
    }
});
module.exports = Title;
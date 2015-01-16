'use strict';
require('styles/list_header');

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
        let text = this.props.children,
            fontSize = (text) => 100 - Math.max(text.length-23, 0) * 0.3,
            style = {fontSize: `${fontSize(text)}%`},
            onClick = this.props.onClick;

        return d('span#caption', {style, onClick}, text);
    }
});
module.exports = Title;

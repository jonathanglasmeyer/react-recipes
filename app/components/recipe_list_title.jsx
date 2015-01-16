'use strict';
require('styles/list_header');

let pt = require('react').PropTypes;

let RecipeListTitle = React.createClass({
    displayName: 'RecipeListTitle',

    contextTypes: {
        recipe: pt.object.isRequired,
        isOpen: pt.bool.isRequired
    },

    handleClick() {
        if (this.context.isOpen) {
            Actions.setOpenRecipe(null);
        } else {
            Actions.setOpenRecipe(this.context.recipe.key);
        }
    },


    render() {
        let text = this.context.recipe.title,
            fontSize = (text) => 100 - Math.max(text.length-23, 0) * 0.3,
            style = {fontSize: `${fontSize(text)}%`},
            onClick = this.handleClick;

        return d('span#caption', {style, onClick}, text);
    }
});
module.exports = RecipeListTitle;

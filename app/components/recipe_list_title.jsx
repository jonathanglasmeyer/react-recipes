'use strict';
require('styles/list_header');

var pt = require('react').PropTypes;

let RecipeListTitle = React.createClass({
    displayName: 'RecipeListTitle',

    contextTypes: {
        recipe: pt.object.isRequired,
        isOpen: pt.bool.isRequired,
        ui: pt.object.isRequired
    },

    handleClick() {
        // console.log('shoetn');
        // console.log(this.context.ui.openRecipe);
        if (this.context.isOpen) {
            Actions.setOpenRecipe(null);
            // Actions.tweenIn(this.context.recipe.key);
        } else {
            Actions.setOpenRecipe(this.context.recipe.key);
            // Actions.tweenIn(this.context.ui.openRecipe);
            // Actions.tweenOut(this.context.recipe.key);
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

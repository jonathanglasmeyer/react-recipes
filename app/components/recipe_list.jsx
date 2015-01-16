'use strict';
require('styles/list.less');

let pt = require('react').PropTypes;

// let Input = require('components/input');
// let Item = require('components/item');
let ListInput = require('components/list_input');
let RecipeListHeader = require('components/recipe_list_header');
let RecipeListItem = require('components/recipe_list_item');
let RecipeListFooter = require('components/recipe_list_footer');
let ListWrap = require('components/list_wrap');

let RecipeList = React.createClass({
    displayName: 'RecipeList',

    propTypes: {
        recipe: pt.object.isRequired,
    },

    // from App-Component
    contextTypes: {
        ui: pt.object.isRequired 
    },

    childContextTypes: {
        recipeKey: pt.string.isRequired,
        recipe: pt.object.isRequired, // for adding all elements icon in header
        isOpen: pt.bool.isRequired,
        editMode: pt.bool.isRequired,
        height: pt.number.isRequired,
    },

    getChildContext() {
        return {
            recipeKey: this.props.recipe.key,
            recipe: this.props.recipe,
            isOpen: this.isOpen(),
            editMode: this.isOpen() && this.editMode(),
            height: this.height(),
        };
    },

    itemCount()  { return this.props.recipe.items.length; },
    itemStartI() { return this.editMode() ? 2 : 1; },
    isOpen()     { return this.context.ui.openRecipe === this.props.recipe.key; },
    editMode()   { return this.context.ui.editMode || this.itemCount() === 0; },
    height()     {
        return this.isOpen() ? this.itemCount()*50+6+50*(this.itemStartI()+1) : 50;
    },

    render() {
        // let itemComponents = _.map(h.categorySorted(this.props.items, (item, i) =>
        //     <ShoppingListItem
        //         key={item.key}
        //         i={i+2}
        //         item={item} />
        // );


        return d(ListWrap, {footer: d(RecipeListFooter)}, [

            d(RecipeListHeader),

            this.editMode() ? d(ListInput) : null,

            a.fadingSlow(h.itemComponentList(
                this.props.recipe.items,
                RecipeListItem,
                this.itemStartI()))
        ]);

    }
});
module.exports = RecipeList;


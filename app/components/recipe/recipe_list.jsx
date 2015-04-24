'use strict';
require('styles/list.less');

var pt = require('react').PropTypes;

var Reflux = require('reflux');

var ListInput = require('components/list_input');
var RecipeListHeader = require('./recipe_list_header.jsx');
var RecipeListItem = require('./recipe_list_item.jsx');
var RecipeListFooter = require('./recipe_list_footer.jsx');
var List = require('../widgets/list.jsx');

let RecipeList = React.createClass({
    displayName: 'RecipeList',


    propTypes: {recipe: pt.object.isRequired},

    // from App-Component
    contextTypes: {
        ui: pt.object.isRequired
    },

    getInitialState() {
        return {
            percent: 0,
            itemOpacity: 0,
            showItems: false
        };
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
            height: this.height()
        };
    },
    // -------------------------------------------------------------------------

    itemCount()  { return this.props.recipe.items.length; },

    itemStartI() { return this.editMode() ? 2 : 1; },

    isOpen() {
       return this.context.ui.openRecipe === this.props.recipe.key;
    },

    editMode() { 
        return this.context.ui.editMode || this.itemCount() === 0; 
    },

    height()     {
        return this.isOpen() ? this.itemCount()*50+6+50*(this.itemStartI()+1) : 50;
    },

    render() {

        return d(List, {footer: d(RecipeListFooter)}, [
            d(RecipeListHeader),

            this.editMode() ? d(ListInput) : null,

            this.isOpen() ? a.fadingSlow(h.itemComponentList(
                this.props.recipe.items,
                RecipeListItem,
                this.itemStartI())) : null,
        ]);

    }
});
module.exports = RecipeList;


'use strict';
require('styles/list.less');

let tweenState = require('react-tween-state');

let pt = require('react').PropTypes;

let Reflux = require('reflux');

// let Input = require('components/input');
// let Item = require('components/item');
let ListInput = require('components/list_input');
let RecipeListHeader = require('components/recipe_list_header');
let RecipeListItem = require('components/recipe_list_item');
let RecipeListFooter = require('components/recipe_list_footer');
let List = require('./widgets/list.jsx');

let RecipeList = React.createClass({
    displayName: 'RecipeList',

    mixins: [ tweenState.Mixin,
        Reflux.listenTo(Actions.tweenOut, 'tweenOut'),
        Reflux.listenTo(Actions.tweenIn, 'tweenIn')
    ],

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

    // --------- context for children ------------------------------------------
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

    // // for the tweening
    // heightItems() {
    //     return this.itemCount()*50+6+50*this.itemStartI();
    // },

    // // grow
    // tweenOut(recipeKey) {
    //     if (this.props.recipe.key === recipeKey) {
    //         this.tweenState('percent', {
    //               easing: tweenState.easingTypes.easeInOutQuad,
    //               duration: 400,
    //               beginValue: 0,
    //               endValue: 1
    //         });
    //     }
    // },

    // // shrink
    // tweenIn(recipeKey) {
    //     if (this.props.recipe.key === recipeKey) {
    //         this.tweenState('percent', {
    //               easing: tweenState.easingTypes.easeInOutQuad,
    //               duration: 400,
    //               beginValue: 1,
    //               endValue: 0
    //         });
    //     }
    // },

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


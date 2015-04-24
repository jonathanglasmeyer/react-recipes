'use strict';
require('base/less/style.less');
require('styles/app');

var Reflux = require('reflux');

var ItemStore = require('item_store');
var UIStore = require('ui_store');
var RecipesStore = require('recipes_store');
var ShoppingList = require('./shopping_list/shopping_list.jsx');
var RecipeList = require('./recipe/recipe_list.jsx');
var NewRecipeButton = require('components/new_recipe_button');

var pt = require('react').PropTypes;

var {slidein} = require('animate');


let App = React.createClass({

    mixins: [
        Reflux.connect(ItemStore,'items'),
        Reflux.connect(RecipesStore,'recipes'),
        Reflux.connect(UIStore,'ui'),
    ],

    getInitialState() {
        return {
            items: [],
            recipes: [],
            recents: [],
            ui: {openRecipe: null},
        };
    },

    childContextTypes: {
        ui: pt.object.isRequired,
    },

    getChildContext() {
        return {
            ui: this.state.ui
        };
    },

    componentWillMount() {
        Actions.init();
    },

    render() {
        let recipes = this.state.recipes.slice().reverse();
        let recipesLists = _.map(recipes, recipe =>
                d(RecipeList, {ui: this.state.ui, key: recipe.key, recipe}));

        return d('div.main', {}, [
            d(ShoppingList, {key: 0, items: this.state.items}),
            d(NewRecipeButton, {key: 1}),
            recipes.length > 0 ? a.slidein(recipesLists) : null]);
    }
});

module.exports = App;

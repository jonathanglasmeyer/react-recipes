'use strict';
// CSS
require('modernizr/modernizr');
require('base/less/style.less');
require('styles/app');

var Reflux = require('reflux');

var ItemStore = require('item_store');
var UIStore = require('ui_store');
// var RecentsStore = require('recents_store');
var RecipesStore = require('recipes_store');
var ShoppingList = require('./shopping_list/shopping_list.jsx');
var RecipeList = require('components/recipe_list');
var NewRecipeButton = require('components/new_recipe_button');
// var Recents = require('components/recents');


var pt = require('react').PropTypes;

var {slidein} = require('animate');


let App = React.createClass({

    mixins: [
        Reflux.connect(ItemStore,'items'),
        Reflux.connect(RecipesStore,'recipes'),
        Reflux.connect(UIStore,'ui'),
        // Reflux.connect(RecentsStore,'recents'),
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

    // let recentObjects = _.map(_.take(this.state.recents.slice().reverse(),5),
    //   recent =>
    //       _.find(this.state.recipes, recipe => recipe.key === recent.recipeKey));

        return d('div.main', {}, [
            d(ShoppingList, {key: 0, items: this.state.items}),
            d(NewRecipeButton, {key: 1}),
            recipes.length > 0 ? a.slidein(recipesLists) : null]);
    }
});

module.exports = App;

          // <NewRecipeButton />
          // {slidein(recipesComponents)}

          // <Recents
          //   recents={recentObjects} />

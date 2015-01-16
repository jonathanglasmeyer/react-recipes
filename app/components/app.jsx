'use strict';
// CSS
require('modernizr/modernizr');
require('base/less/style.less');
require('styles/app');

let Reflux = require('reflux');

let ItemStore = require('item_store');
let UIStore = require('ui_store');
// let RecentsStore = require('recents_store');
let RecipesStore = require('recipes_store');
let ShoppingList = require('components/shopping_list');
let RecipeList = require('components/recipe_list');
// let Recents = require('components/recents');

// let NewRecipeButton = require('components/new_recipe_button');
let pt = require('react').PropTypes;

let {slidein} = require('animate');


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
                d(RecipeList, {key: recipe.key, recipe}));

    // let recentObjects = _.map(_.take(this.state.recents.slice().reverse(),5),
    //   recent =>
    //       _.find(this.state.recipes, recipe => recipe.key === recent.recipeKey));

        return d('div.main', {}, [
            d(ShoppingList, {items: this.state.items}),
            recipes.length > 0 ? recipesLists : null]);
    }
});

module.exports = App;

          // <NewRecipeButton />
          // {slidein(recipesComponents)}

          // <Recents
          //   recents={recentObjects} />

'use strict';
// CSS
require('modernizr/modernizr');
require('base/less/style.less');
require('styles/app');

let Reflux = require('reflux');
let ReactCSSTransitionGroup = require('react/addons').addons.CSSTransitionGroup;
let pt = require('react').PropTypes;

let Actions = require('actions');
let ItemStore = require('item_store');
let RecipesStore = require('recipes_store');
let List = require('components/list');
let NewRecipeButton = require('components/new_recipe_button');

let Fade = require('mixins/fade');

let App = React.createClass({
    propTypes: {
        title: pt.string,
        items: pt.array,
        isRecipe: pt.bool,
        recipeKey: pt.string
    },

    mixins: [
        Reflux.connect(ItemStore,'items'),
        Reflux.connect(RecipesStore,'recipes'),
        Fade
    ],

    getInitialState() {
        return {
            items: [],
            recipes: []
        };
    },

    componentWillMount() {
        Actions.init();
    },

    render() {
        let recipes = this.state.recipes;
        let reversed = recipes.slice().reverse();
        let recipesComponents =
            recipes.length > 0 ?
                _.map(reversed, recipe =>
                      <List title={recipe.title}
                      items={recipe.items}
                      key={recipe.key}
                      recipeKey={recipe.key}
                      isRecipe={true} />) :
                null;

        return (
          <div className='main'>
              <List items={this.state.items}/>

              <NewRecipeButton />

              {this.fading(recipesComponents)}
          </div>
        );
    }
});

module.exports = App;

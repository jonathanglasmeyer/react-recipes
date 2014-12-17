'use strict';
// css presets
require('modernizr/modernizr');
require('base/less/style.less');

// require("imports?this=>window!typeahead.js");

// custom css
require('styles/app');

var Actions = require('actions');

var ItemStore = require('item_store');
var RecipesStore = require('recipes_store');

// var Header = require('components/header');
var List = require('components/list');

function getState() {
    return {
        items: ItemStore.getItems(),
        recipes: RecipesStore.getRecipes()
    };
}

module.exports = React.createClass({
    mixins: [ItemStore.mixin, RecipesStore.mixin],

    getInitialState() {
        return getState();
    },

    componentWillMount() {
      Actions.init();
    },

    onChange() {
        this.setState(getState());
    },

    render() {
        console.log(this.state.recipes);
        let recipesComponents = 
            this.state.recipes.length > 0 ?
                _.map(this.state.recipes, recipe =>
                                            <List title={recipe.title}
                                                  items={recipe.items}
                                                  key={recipe.key}
                                                  isRecipe={true} />)
            : null;

        return (
            <div>
                    <div className='main'>
                        <List items={this.state.items}/>
                        {recipesComponents}
                    </div>
            </div>
        );
    }
});

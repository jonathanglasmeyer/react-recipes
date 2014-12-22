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

var ReactCSSTransitionGroup = require('react/addons').addons.CSSTransitionGroup;

// var Header = require('components/header');
var List = require('components/list');
var NewRecipeButton = require('components/new_recipe_button');

// var Fab = require('components/fab');
var Reflux = require('reflux');

// var  mui = require('material-ui'),
//   RaisedButton = mui.RaisedButton;

var Immutable = require('immutable');

function getState() {
    return {
        items: [],
        recipes: []
    };
}

module.exports = React.createClass({
    // mixins: [ItemStore.mixin, RecipesStore.mixin],
    mixins: [Reflux.connect(ItemStore,'items')],

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
        let recipes = Immutable.List(this.state.recipes);
        let reversed = recipes.reverse().toArray();
        let recipesComponents =
            _.size(this.state.recipes) > 0 ?
                _.map(reversed, recipe =>
                                        <List title={recipe.title}
                                              items={recipe.items}
                                              key={recipe.key}
                                              recipeKey={recipe.key}
                                              isRecipe={true} />)
            : null;
        // console.log('app.js', _.map(_.toArray(this.state.recipes), r=>r.items));



        return (
            <div>
                    <div className='main'>
                        <List items={this.state.items}/>
                        <NewRecipeButton />
                        <ReactCSSTransitionGroup transitionName="example">
                            {recipesComponents}
                        </ReactCSSTransitionGroup>
                    </div>
            </div>
        );
    }
});

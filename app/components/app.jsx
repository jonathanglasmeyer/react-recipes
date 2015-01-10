'use strict';
// CSS
require('modernizr/modernizr');
require('base/less/style.less');
require('styles/app');

let Reflux = require('reflux');
let pt = require('react').PropTypes;

let Actions = require('actions');
let ItemStore = require('item_store');
let RecipesStore = require('recipes_store');
let List = require('components/list');
let NewRecipeButton = require('components/new_recipe_button');

let {slidein} = require('animate');

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
        Reflux.listenTo(Actions.setActiveItem, 'onActiveItemChange'),
        Reflux.listenTo(Actions.setOpenRecipe, 'onOpenRecipeChange'),
        Reflux.listenTo(Actions.setActiveTitle, 'onActiveTitleChange'),
        Reflux.listenTo(Actions.setActiveConfirm, 'onActiveConfirmChange'),
        Reflux.listenTo(Actions.setActiveMeta, 'onActiveMetaChange')
    ],

    getInitialState() {
        return {
            items: [],
            recipes: [],
            activeItem: null,
            openRecipe: null,
            activeUIElement: null,
            activeRecipe: null,
            activeMeta: null,
            activeTitle: null,
            activeConfirm: null
        };
    },

    onOpenRecipeChange(recipeKey) {
        this.setState({
            openRecipe: recipeKey,
            activeRecipe: null,
            activeItem: null,
            activeMeta: null,
            activeConfirm: null
        });

        console.log('onOpenRecipeChange', this.state.openRecipe);
    },

    onActiveItemChange(recipeKey, itemKey) {
        this.setState(
            { activeRecipe: recipeKey,
              activeItem: itemKey,
              activeConfirm: null,
              activeTitle: recipeKey});

        console.log('onactiveitem', this.state.activeRecipe);
    },

    onActiveTitleChange(recipeKey) {
        if (recipeKey) {
            this.setState({activeTitle: recipeKey,
                           activeRecipe: recipeKey,
                           activeConfirm: null,
                           activeMeta: null,
                           activeItem: null});
        } else {
            this.setState({activeTitle: recipeKey,
                           activeConfirm: null,
                           activeMeta: null,
                           activeItem: null});
        }


        console.log('onactivetitle', this.state.activeTitle);
    },

    onActiveConfirmChange(recipeKey) {
        this.setState({activeTitle: null,
                       activeItem: null,
                       activeMeta: null,
                       activeConfirm: recipeKey});
        console.log('onactiveconfirm', this.state.activeTitle);
    },

    onActiveMetaChange(recipeKey) {
        this.setState({activeTitle: null,
                       activeItem: null,
                       activeConfirm: null,
                       activeMeta: recipeKey});
        console.log('onactivemeta', this.state.activeMeta);
    },

    componentWillMount() {
        Actions.init();
    },

    componentDidUpdate() {
        let newRecipe = _.find(this.state.recipes, recipe =>
           recipe.title === 'Unbenannt');

       // if (newRecipe) {
       //     if (this.state.activeTitle === null) {
       //          Actions.setActiveTitle(newRecipe.key);
       //     }
       // }

    },

    render() {
        let recipes = this.state.recipes;
        let reversed = recipes.slice().reverse();
        let recipesComponents =
            recipes.length > 0 ?
                _.map(reversed, recipe =>
                      <List title={recipe.title}
                      meta={recipe.meta || ''}
                      items={recipe.items}
                      counter={recipe.counter || 0}
                      key={recipe.key}
                      recipeKey={recipe.key}
                      openRecipe={this.state.openRecipe === recipe.key}
                      activeRecipe={this.state.activeRecipe === recipe.key}
                      activeConfirm={this.state.activeConfirm === recipe.key}
                      activeItem={this.state.activeItem}
                      activeMeta={this.state.activeMeta}
                      activeTitle={this.state.activeTitle === recipe.key}
                      isRecipe={true} />) :
                null;

        return (
          <div className='main'>
              <List items={this.state.items} />

              <NewRecipeButton />

              {slidein(recipesComponents)}
          </div>
        );
    }
});

module.exports = App;

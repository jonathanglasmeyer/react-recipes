'use strict';

var mcFly = require('mcFly');

var ref = require('firebase_ref').child('recipes');

var ItemStore = require('item_store');

var _recipes = [];

// just read
var _items = [];

var RecipesStore = mcFly.createStore({
    addListener() {
        ItemStore.addChangeListener(this.onChange);
    },

    onChange() {
        _items = ItemStore.getItems();
    },

    getRecipes() {
        return _recipes;
    },

}, function(payload){

    switch(payload.actionType) {
        case 'INIT':
            init();
            RecipesStore.addListener();
        break;

        case 'SAVE_AS_RECIPE':
            saveAsRecipe(payload.recipeName);
        break;

        default:
            return true;
    }

    RecipesStore.emitChange();

    return true;

});

function saveAsRecipe(recipeName) {
    var childRef = ref.push();
    let uncheckedItems = _.filter(_items, item => !item.checked);
    childRef.set({
        title: recipeName,
        key: childRef.key(),
        items: _items
    });
}


function init() {
    ref.on('child_added', (dataSnapshot) => {
        _recipes.push(dataSnapshot.val());
        RecipesStore.emitChange();
    });

    ref.on('child_changed', (dataSnapshot) => {
        var key = dataSnapshot.key();
        var data = dataSnapshot.val();
        var position = (_.findKey(_recipes, {key: key}));
        _recipes[position] = data;
        RecipesStore.emitChange();
    });

    ref.on('child_removed', (dataSnapshot) => {
        var key = dataSnapshot.key();
        var position = (_.findKey(_recipes, {key: key}));
        _recipes.splice(position, 1);
        RecipesStore.emitChange();
    });
}

module.exports = RecipesStore;

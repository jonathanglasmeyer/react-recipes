'use strict';

var mcFly = require('mcFly');

var ref = require('firebase_ref').child('recipes');

var ItemStore = require('item_store');

var {category} = require('helpers');

var _recipes = [];

var RecipesStore = mcFly.createStore({

    getRecipes() {
        return _recipes;
    },

}, function(payload){

    switch(payload.actionType) {
        case 'INIT':
            init();
        break;

        case 'NEW_RECIPE':
            newRecipe();
        break;

        case 'DELETE_RECIPE':
            deleteRecipe(payload.recipeKey);
        break;

        case 'ADD_TO_RECIPE':
            addToRecipe(payload.itemText, payload.recipeKey);
        break;

        default:
            return true;
    }

    RecipesStore.emitChange();

    return true;

});

function newRecipe() {
    var childRef = ref.push();
    childRef.set({
        title: 'Unbenannt2',
        key: childRef.key(),
    });
}

function addToRecipe(itemText, recipeKey) {

    let newItemRef = ref.child(recipeKey).child('items').push();
    newItemRef.set({
        checked: false,
        text: itemText,
        key: newItemRef.key(),
        category: category(itemText)
    });
}

function deleteRecipe(recipeKey) {
    ref.child(recipeKey).remove();
}


function init() {
    ref.on('value', snap => {
        let recipes = snap.val();
        _recipes = _.map(recipes, r => {
            return {
                key: r.key,
                title: r.title,
                items: _.toArray(r.items)
            };
        });

        RecipesStore.emitChange();
    });

    // ref.on('child_added', (dataSnapshot) => {
    //     let data = dataSnapshot.val();
    //     var key = dataSnapshot.key();
    //     let items = _.values(_.map(data.items, item => item));


    //     _recipes.push({title: data.title, key, items});
    //     RecipesStore.emitChange();
    // });

    // ref.on('child_changed', (dataSnapshot) => {
    //     var key = dataSnapshot.key();
    //     var data = dataSnapshot.val();
    //     let items = _.values(_.map(data.items, item => item));

    //     var position = (_.findKey(_recipes, {key: key}));
    //     _recipes[position] = {key, items};
    //     RecipesStore.emitChange();
    // });

    // ref.on('child_removed', (dataSnapshot) => {
    //     var key = dataSnapshot.key();
    //     var position = (_.findKey(_recipes, {key: key}));
    //     _recipes.splice(position, 1);
    //     RecipesStore.emitChange();
    // });

}

module.exports = RecipesStore;

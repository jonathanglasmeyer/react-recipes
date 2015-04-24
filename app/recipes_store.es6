'use strict';

var Reflux = require('reflux');
var ref = require('firebase_ref').child('recipes');
var Actions = require('actions');

var {capitalize,category} = require('helpers');
var actions = require('actions');

const categories = require('data/categories.json');

module.exports = Reflux.createStore({
    listenables: actions,

    onInit() {
        ref.on('value', snap => {
            let recipes = snap.val();
            this.recipes = _.map(recipes, r => ({
                key: r.key,
                title: r.title,
                counter: r.counter || 0,
                meta: r.meta,
                items: _.toArray(r.items)
            }
            ));
            this.trigger(this.recipes);
        });
    },

    onNewRecipe() {
        let childRef = ref.push();
        childRef.set({ title: '', key: childRef.key()});
        setTimeout(()=> {
                   Actions.setOpenRecipe(childRef.key());
                   Actions.startEditMode();
        }, 50);
    },

    onSetMeta(recipeKey, meta) {
        // console.log('setMeta', meta, recipeKey);
        let metaRef = ref.child(recipeKey);
        metaRef.update({meta});
    },


    onAddToRecipe(itemText, recipeKey) {
        let newItemRef = ref.child(recipeKey).child('items').push();

        // let itemTexts = _.flatten(categories, 'items');
        // let text_ = capitalize(_.sample(itemTexts));

        newItemRef.set({
            checked: false,
            text: itemText,
            key: newItemRef.key(),
        });
    },

    onRenameRecipeItem(recipeKey, itemKey, text) {
        ref.child(recipeKey).child('items').child(itemKey).update({text});
    },

    onDeleteRecipe(recipeKey) {
        ref.child(recipeKey).remove();
    },

    onDeleteFromRecipe(recipeKey, itemKey) {
        ref.child(recipeKey).child('items').child(itemKey).remove();
    },

    onRenameRecipe(recipeKey, title) {
        ref.child(recipeKey).update({title: title});
    },

    onIncrementCounter(recipeKey) {
        ref.child(recipeKey).child('counter').transaction(current=>(current||0)+1);
    },

    onDecrementCounter(recipeKey) {
        ref.child(recipeKey).child('counter').transaction(current=>(current||0)-1);
    },

});

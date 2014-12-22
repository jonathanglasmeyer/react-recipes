'use strict';

let Reflux = require('reflux');
let ref = require('firebase_ref').child('recipes');

let {category} = require('helpers');
let actions = require('actions');

module.exports = Reflux.createStore({
    listenables: actions,

    onInit() {
        ref.on('value', snap => {
            let recipes = snap.val();
            this.recipes = _.map(recipes, r => ({
                key: r.key,
                title: r.title,
                items: _.toArray(r.items)
            }
            ));
            this.trigger(this.recipes);
        });
    },

    onNewRecipe() {
        let childRef = ref.push();
        childRef.set({ title: 'Unbenannt', key: childRef.key()});
    },

    onAddToRecipe(itemText, recipeKey) {
        let newItemRef = ref.child(recipeKey).child('items').push();

        newItemRef.set({
            checked:  false,
            text:     itemText,
            key:      newItemRef.key(),
            category: category(itemText)
        });
    },

    onDeleteRecipe(recipeKey) {
        ref.child(recipeKey).remove();
    }
});

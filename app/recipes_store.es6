'use strict';

let Reflux = require('reflux');
let ref = require('firebase_ref').child('recipes');

let {capitalize,category} = require('helpers');
let actions = require('actions');

const categories = require('data/categories.json');

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

        let itemTexts = _.flatten(categories, 'items');
        let text_ = capitalize(_.sample(itemTexts));

        newItemRef.set({
            checked: false,
            text: text_,
            key: newItemRef.key(),
            category: category(text_)
        });
    },

    onDeleteRecipe(recipeKey) {
        ref.child(recipeKey).remove();
    }
});

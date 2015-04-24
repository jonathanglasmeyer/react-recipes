'use strict';

var ref = require('firebase_ref').child('recents');
var Reflux = require('reflux');

var actions = require('actions');

module.exports = Reflux.createStore({
    listenables: actions,

    onInit() {
        ref.on('value', snap => {
            this.recents = _.toArray(snap.val());
            this.trigger(this.recents);
        });
    },

    onPushRecentRecipe(recipeKey) {
        let newRecentRef = ref.push();
        newRecentRef.set({recipeKey, key: newRecentRef.key()});
    }

});

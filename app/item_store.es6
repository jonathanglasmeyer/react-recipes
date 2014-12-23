'use strict';

let Reflux = require('reflux');
let ref = require('firebase_ref').child('items');

let actions = require('actions');
let {category} = require('helpers');

const categories = require('data/categories.json');

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

module.exports = Reflux.createStore({

    listenables: actions,

    onAddItem(text) {
        let childRef = ref.push();
        let itemTexts = _.flatten(categories, 'items');
        let text_ = capitalize(_.sample(itemTexts));

        childRef.set({
            checked: false,
            text: text_,
            key: childRef.key(),
            category: category(text_)
        });
    },

    onInit() {
        ref.on('value', snap => {
            this.items = _.toArray(snap.val());
            this.trigger(this.items);
        });
    },

    onCheck(key, state) {
        let childRef = ref.child(key);
        childRef.once('value', snap => {
            if ('checked' in snap.val()) {
                childRef.update({checked: state}); }
        });
    },

    onDeleteItem(key) {
        ref.child(key).remove();
    },

    onRemoveAllChecked() {
        let checkedItems = _.filter(this.items, 'checked');
        _.each(checkedItems, item => this.onDeleteItem(item.key));
    },

    onCheckAll() {
        let uncheckedItems = _.filter(this.items, item => !item.checked);
        // this is to uncheck all items if all are already checked
        let boolVal = uncheckedItems.length !== 0;
        _.each(this.items, (item) => this.onCheck(item.key, boolVal));
    }

});

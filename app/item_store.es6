'use strict';

var Parse = require('parse').Parse;
var Reflux = require('reflux');
var ref = require('firebase_ref').child('items');
import Immutable from 'immutable';
import config from 'config/config.js';

var actions = require('actions');
var {capitalize,category} = require('helpers');

const categories = require('data/categories.json');

function _immutable(items) {
  return Immutable.List(items.map(item => Immutable.Map(item)));
}

module.exports = Reflux.createStore({

    listenables: actions,

    onAddItem(text) {
        let childRef = ref.push();
        // let itemTexts = _.flatten(categories, 'items');
        // let text_ = capitalize(_.sample(itemTexts));

        childRef.set({
            checked: false,
            text: text,
            key: childRef.key(),
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
        childRef.update({checked: state});

        // childRef.once('value', snap => {
            // if ('checked' in snap.val()) {
                // childRef.update({checked: state}); }
        // });
    },

    onDeleteItem(key) {
        ref.child(key).remove();
    },

    onRemoveAllChecked() {
        let checkedItems = _.filter(this.items, 'checked');
        _.each(checkedItems, (item,i) =>
           setTimeout(()=>this.onDeleteItem(item.key),50*i));
    },

    onCheckAll() {
        let uncheckedItems = _.filter(this.items, item => !item.checked);

        let categorizedItems = _.each(this.items, item =>
                                         item.category = category(item.text));
        let sortedItems = _.sortBy(categorizedItems, item => item.category.id);

        // this is to uncheck all items if all are already checked
        let boolVal = uncheckedItems.length !== 0;
        _.each(sortedItems, item => this.onCheck(item.key, boolVal));
    }

});

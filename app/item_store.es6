'use strict';

let Reflux = require('reflux');
let ref = require('firebase_ref').child('items');

let actions = require('actions');
let {category} = require('helpers');

var _items = [];

module.exports = Reflux.createStore({

    listenables: actions,

    onAddItem(text) {
        var childRef = ref.push();
        childRef.set({
            checked: false,
            text: text,
            key: childRef.key(),
            category: category(text)
        });
    },

    onInit() {
        ref.on('value', snap => {
            _items = _.toArray(snap.val());
            this.trigger(_items);
        });
    },

    onCheck(key, state) {
        ref.child(key).update({checked: state});
    },

    onDeleteItem(key) {
        ref.child(key).remove();
    },

    onRemoveAllChecked() {
        let checkedItems = _.filter(_items, 'checked');
        _.each(checkedItems, item => this.onDeleteItem(item.key));
    },

    onCheckAll() {
        let uncheckedItems = _.filter(_items, item => !item.checked);
        // this is to uncheck all items if all are already checked
        let boolVal = uncheckedItems.length !== 0;
        _.each(_items, (item) => this.onCheck(item.key, boolVal));
    }

});

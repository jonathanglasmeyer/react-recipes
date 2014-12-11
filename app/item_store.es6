'use strict';

var mcFly = require('mcFly');

var ref = require('firebase_ref');

var categories = require('data/categories.json');

var _items = [];

function contains(string1, string2) {
    // case independent
   return string1.toLowerCase().indexOf(string2.toLowerCase()) > -1;
}

function category(itemName) {
    let cat = _.find(categories, cat =>
         _.any(cat.items, catItem => contains(itemName, catItem)));
    return cat === undefined ?
        { name: 'undefined', id: 999, color: 'black'} :
        { name: cat.name, id: cat.id, color: cat.color };
}

var ItemStore = mcFly.createStore({

    getItems() {
        return _items;
    },

}, function(payload){

    switch(payload.actionType) {
        case 'ADD_ITEM':
            addItem(payload.text);
        break;

        case 'INIT':
            init();
        break;

        case 'CHECK':
            check(payload.key, payload.state);
        break;

        case 'DELETE':
            deleteItem(payload.key);
        break;

        default:
            return true;
    }

    ItemStore.emitChange();

    return true;

});

function addItem(text) {
    var childRef = ref.push();
    childRef.set({
        checked: false,
        text: text,
        key: childRef.key(),
        category: category(text)
    });
}

function check(key, state) {
    ref.child(key).update({checked: state});
}

function deleteItem(key) {
    ref.child(key).remove();
}

function init() {
    ref.on('child_added', (dataSnapshot) => {
        _items.push(dataSnapshot.val());
        ItemStore.emitChange();
    });

    ref.on('child_changed', (dataSnapshot) => {
        var key = dataSnapshot.key();
        var data = dataSnapshot.val();
        var position = (_.findKey(_items, {key: key}));
        _items[position] = data;
        ItemStore.emitChange();
    });

    ref.on('child_removed', (dataSnapshot) => {
        var key = dataSnapshot.key();
        var position = (_.findKey(_items, {key: key}));
        _items.splice(position, 1);
        ItemStore.emitChange();
    });
}

module.exports = ItemStore;

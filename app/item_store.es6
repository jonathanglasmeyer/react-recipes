'use strict';

var mcFly = require('mcFly');

var ref = require('firebase_ref').child('items');

// var RecipesStore = require('recipes_store');

// var Actions = require('actions');

var {category} = require('helpers');

var _items = [];

var Velocity = require('imports?this=>window!velocity-animate/velocity');




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

        case 'REMOVE_ALL_CHECKED':
            removeAllChecked();
        break;

        case 'CHECK_ALL':
            checkAll();
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
    // let c = ref.child('xxxxoxenoxenxoen');
    // c.update({checked: true});
    ref.child(key).update({checked: state});
}

function deleteItem(key) {
    ref.child(key).remove();
}

function removeAllChecked() {
    let checkedItems = _.filter(_items, 'checked');
    _.each(checkedItems, item => deleteItem(item.key));
}

function checkAll() {
    let uncheckedItems = _.filter(_items, item => !item.checked);

    // this is to uncheck all items if all are already checked
    let boolVal = uncheckedItems.length !== 0;

    _.each(_items, (item) => check(item.key, boolVal));
}

function init() {
    ref.on('value', snap => {
        _items = _.toArray(snap.val());
        ItemStore.emitChange();
    });

    // ref.on('child_added', (dataSnapshot) => {
    //     var data = dataSnapshot.val();
    //     if (data === { checked: true } ) console.log(data);
    //     if (data === { checked: false } ) console.log(data);
    //     _items.push(dataSnapshot.val());
    //     ItemStore.emitChange();
    // });

    // ref.on('child_changed', (dataSnapshot) => {
    //     var key = dataSnapshot.key();
    //     var data = dataSnapshot.val();
    //     var position = (_.findKey(_items, {key: key}));
    //     _items[position] = data;
    //     ItemStore.emitChange();
    // });

    // ref.on('child_removed', (dataSnapshot) => {
    //     var key = dataSnapshot.key();
    //     var position = (_.findKey(_items, {key: key}));
    //     _items.splice(position, 1);
    //     ItemStore.emitChange();
    // });
}

module.exports = ItemStore;

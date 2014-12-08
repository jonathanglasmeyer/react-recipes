var mcFly = require('mcFly');

var ref = require('firebase_ref');

var _items = [];

function addItem(text) {
    var childRef = ref.push();
    childRef.set({checked: false, text: text, key: childRef.key()});
}

function check(key, state) {
    ref.child(key).update({checked: state});
}

function delete_item(key) {

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
            delete_item(payload.key);
        break;

        default:
            return true;
    }

    ItemStore.emitChange();

    return true;

});



module.exports = ItemStore;

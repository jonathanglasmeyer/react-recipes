var mcFly = require('mcFly');

var ref = require('firebase_ref');

var _items = [];

function addItem(text) {
    var childRef = ref.push();
    childRef.set({checked: false, text: text, key: childRef.key()});
}

function toggle(key, state) {
    ref.child(key).update({checked: state});
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

        case 'TOGGLE':
            toggle(payload.key, payload.state);
        break;

        default:
            return true;
    }

    ItemStore.emitChange();

    return true;

});



module.exports = ItemStore;

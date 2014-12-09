var mcFly = require('mcFly');

var ref = require('firebase_ref');

var Firebase = require('firebase');


var _items = [];

function _split(str) {
    return str.trim().split(/\s+/);
}

const KRAEUTER = [ "basilikum", "rosmarin", "thymian", "salbei", 'zitronengras', 'koriander']
const GEMUESE = [
    "zwiebel", "schalotte", "knoblauch", "chili", "zitrone", "ingwer", 'limette',
    "Möhre", "Tomate", "kohl", "brokkoli", "avocado", "salat", "kartoffel", "gurke", "beete", "banane", "apfel", 'bohnensprossen']

const MILCHKAESE = ["milch", "käse", "sahne", "soja", "creme", "fraiche"]

const DROGERIE = ['shampoo', 'waschgel', 'seife', 'toilettenpapier', 'küchenkrep', 'tabs']
const CATEGORIES = [KRAEUTER, GEMUESE, MILCHKAESE, DROGERIE]
const UNCATEGORIZED = 999;

function contains(string1, string2) {
    // case independent
   var foo = string1.toLowerCase().indexOf(string2.toLowerCase()) > -1;
   if (foo) {
       console.log(string1);
       console.log(string2);
   }
   return foo;
}

function category(item_name) {
    let category_id = _.findIndex(CATEGORIES, category =>
         _.any(category, category_item => contains(item_name, category_item)));
    return category_id === -1 ? UNCATEGORIZED : category_id;
}

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

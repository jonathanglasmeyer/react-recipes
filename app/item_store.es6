var mcFly = require('mcFly');

var _items = ['Aubergine', 'Tomate', 'Apfel'];

function addItem(text) {
  _items.push(text);
}

var ItemStore = mcFly.createStore({

  getItems() {
    return _items;
  }

}, function(payload){

  switch(payload.actionType) {
    case 'ADD_ITEM':
        console.log('add item');
        addItem(payload.text);
    break;
    default:
        return true;
  }

  ItemStore.emitChange();

  return true;

});

module.exports = ItemStore;

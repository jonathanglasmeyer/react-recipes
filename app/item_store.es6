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

  init() {
    // this.items = Immutable.List();
    // Parse.initialize(config.parse.appId, config.parse.javascriptKey);
    // var TestObject = Parse.Object.extend("TestObject");
    // var testObject = new TestObject();
    // testObject.save({foo: "bar"}).then(function(object) {
    //   alert("yay! it worked");
    // });
  },

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


  _maybeUpdate(newItems) {
    if (!Immutable.is(this.items, newItems)) {
      this.trigger(newItems);
    }
  },

  onInit() {
    const cache = JSON.parse(localStorage.getItem('foo'));
    if (cache != null) {
      const newItems = _immutable(cache);
      this._maybeUpdate(newItems);
    }
    ref.on('value', snap => {
      this.items = _.toArray(snap.val());
      localStorage.setItem('foo', JSON.stringify(this.items));
      const newItems = _immutable(this.items);
      this._maybeUpdate(newItems);
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

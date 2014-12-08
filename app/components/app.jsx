// css presets
require('modernizr/modernizr');
require('base/less/style.less');

// require("imports?this=>window!typeahead.js");

// custom css
require('styles/app');


var LocalStorageMixin = require('react-localstorage');
var React = require('react');
var ReactFireMixin = require('reactfire');
var FireBaseRef = require('firebase_ref');

var ItemStore = require('item_store');

var Input = require('components/input');
var Header = require('components/header');
var List = require('components/list');

module.exports = React.createClass({
    mixins: [ReactFireMixin, LocalStorageMixin],

    getInitialState() {
        return {items: []};
    },

    componentWillMount() {
      this.bindAsArray(FireBaseRef, 'items');
    },

    addToFirebase(text) {
      var childRef = this.firebaseRefs["items"].push();
      childRef.set({checked: false, text: text, key: childRef.key()});
    },

    syncToggleState(key, state) {
        var childRef = this.firebaseRefs['items'].child(key);
        childRef.update({checked: state});
    },

    render() {
        console.log(this.state.items);
        return (
            <div className='row clear container'>
                <div className='main'>
                    <List onSyncToggleState={this.syncToggleState}
                          items={this.state.items}/>
                    <Input onAddToFirebase={this.addToFirebase} />
                </div>
            </div>
        );
    }
});

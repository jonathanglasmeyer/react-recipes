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

    sendToFirebase(text) {
      this.firebaseRefs["items"].push({ text: text });
    },

    render() {
        return (
            <div className='row clear container'>
                <div className='main'>
                    <List items={this.state.items}/>
                    <Input sendToFirebase={this.sendToFirebase} />
                </div>
            </div>
        );
    }
});

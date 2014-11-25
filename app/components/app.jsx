require('modernizr/modernizr');
require('base/less/style.less');

require("imports?this=>window!typeahead.js");

require('styles/app');

var React = require('react');
var ItemStore = require('item_store');

var Input = require('components/input');
var Header = require('components/header');
var List = require('components/list');

getState = function() {
    return {
        items: ItemStore.getItems()
    }
}


module.exports = React.createClass({
    mixins: [ItemStore.mixin],

    getInitialState() {
        return getState();
    },

    onChange() {
        this.setState(getState());
        console.log(this.state.items);
    },


    render() {
        return (
            <div className='row clear container'>
                <Header />

                <div className='main'>
                    <Input onSubmit={this.handleSubmit} />
                    <List items={this.state.items}/>
                </div>
            </div>
        );
    }
});

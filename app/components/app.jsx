// css presets
require('modernizr/modernizr');
require('base/less/style.less');

// require("imports?this=>window!typeahead.js");

// custom css
require('styles/app');

var React = require('react');
require('reactfire');

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
    mixins: [ItemStore.mixin, ReactFireMixin],

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
                <div className='main'>
                    <Header/>
                    <List items={this.state.items}/>
                    <Input onSubmit={this.handleSubmit} />
                </div>
            </div>
        );
    }
});

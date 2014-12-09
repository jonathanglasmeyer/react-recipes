// css presets
require('modernizr/modernizr');
require('base/less/style.less');

// require("imports?this=>window!typeahead.js");

// custom css
require('styles/app');


var React = require('react');
var Actions = require('actions');

var ItemStore = require('item_store');

var Header = require('components/header');
var List = require('components/list');

function getState() {
    return { items: ItemStore.getItems() };
}

module.exports = React.createClass({
    mixins: [ItemStore.mixin],

    getInitialState() {
        return getState();
    },

    componentWillMount() {
      Actions.init();
    },

    onChange() {
        this.setState(getState());
    },



    render() {
        return (
            <div>
                    <div className='main'>
                        <List items={this.state.items}/>
                    </div>
            </div>
        );
    }
});

'use strict';
require('styles/list_header');

let cx = require('react/addons').addons.classSet;
let d = require('jsnox')(React);


let ListHeaderWrap = React.createClass({
    displayName: 'ListHeaderWrap',

    getInitialState: () => ({
        active: false // render with background, touch events
    }),

    handleTouchStart() {
        this.setState({active: true});
    },

    handleTouchEnd() {
        this.setState({active: false});
    },

    render() {
        return d('li#list-header', {
            className: cx({'active': this.state.active }),
            onTouchStart: this.handleTouchStart,
            onTouchEnd: this.handleTouchEnd},

            this.props.children);
    }
});

module.exports = ListHeaderWrap;

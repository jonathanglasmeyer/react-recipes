'use strict';
require('styles/list_header');

var cx = require('react/addons').addons.classSet;
var d = require('jsnox')(React);

import {StyleResolverMixin} from 'radium';
import {Color, Dimen} from 'styles/vars.js';

var ListItem = require('./list_item.jsx');

const styles = {
    justifyContent: 'space-between',
		borderBottom: `1px solid ${Color.greyDark}`,
}

let ListHeader = React.createClass({

    displayName: 'ListHeader',

    mixins: [StyleResolverMixin],

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
        const style = this.buildStyles(styles);

        return d(ListItem, {style}, this.props.children);

        // return d('li#list-header', {
        //     className: cx({'active': this.state.active }),
        //     onTouchStart: this.handleTouchStart,
        //     onTouchEnd: this.handleTouchEnd},

        //     this.props.children);
    }

});

module.exports = ListHeader;

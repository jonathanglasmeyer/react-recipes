'use strict';

require('styles/item.less');
require('styles/checkbox.less');

var pt = require('react').PropTypes;
import {Colors, Dimen} from 'styles/vars.js';

import {StyleResolverMixin} from 'radium';

const BRIGHT = [255, 250, 245];
const DARK = [66, 65, 64];

const styles = {
    display: 'flex',
    alignItems: 'center',

		height: Dimen.listItemHeight,
    width: '100%',
    padding: `0 ${Dimen.grid / 2}px`,

		transition: 'all .2s ease-out'
};

let ListItem = React.createClass({

    displayName: 'ListItem',

    propTypes: {
        color: pt.string, // hex
        id: pt.string, // the html id attribute
        cursor: pt.string
    },

    mixins: [StyleResolverMixin],

    getDefaultProps() {
        return {
            id: null,
            color: '',
            cursor: 'pointer',
            style: {}
        };
    },

    render() {
        let style = Object.assign(
            this.props.color ? h.categoryColor(this.props.color) : {},
            this.buildStyles(styles),
            this.props.style);
        style.cursor = this.props.cursor;

        return d('li', {style}, this.props.children);
    }
});


module.exports = ListItem;

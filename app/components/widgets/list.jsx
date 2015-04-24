'use strict';
require('styles/list');

var pt = require('react').PropTypes;
import {StyleResolverMixin} from 'radium';

const styles = {
		borderTop: 1,
		paddingLeft: 14,
		background: 'white', //'@base1',
		boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.20)',
		listStyleType: 'none',
		padding: 0,
		borderRadius: 2,
		overflow: 'hidden',
		width: '95.0%',
		margin: '0 auto',
		marginTop: 0,
		marginBottom: '1rem'
}

let List = React.createClass({

    displayName: 'List',

    mixins: [StyleResolverMixin],

    propTypes: {
        footer: pt.element,
    },

    getDefaultProps: () => ({
        footer: null,
        percent: 1
    }),

    contextTypes: {
        ui: pt.object.isRequired,
        isOpen: pt.bool.isRequired,
        height: pt.number.isRequired,
    },

    render() {
        const style = this.buildStyles(styles);

        return d('ul', {style}, this.props.children);

    }
});

module.exports = List;

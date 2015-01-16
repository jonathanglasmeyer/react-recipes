'use strict';
require('styles/list');

let pt = require('react').PropTypes;

let ListWrap = React.createClass({
    displayName: 'ListWrap',

    propTypes: {
        footer: pt.element,
    },

    getDefaultProps: () => ({
        footer: null
    }),

    contextTypes: {
        isOpen: pt.bool.isRequired,
        height: pt.number.isRequired
    },

    render() {
        let style = {height: this.context.height};


        return d('div.items', {style}, [
            d('ul', {}, this.props.children), 
            this.context.isOpen ? this.props.footer : null
        ]);

    }
});

module.exports = ListWrap;

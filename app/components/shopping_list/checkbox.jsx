'use strict';
require('styles/item');
require('styles/checkbox');

var pt = require('react').PropTypes;

// used in CheckboxLabel
let Checkbox = React.createClass({
    propTypes: {
        color: pt.object, // needed for background
        checked: pt.bool.isRequired,
        onClick: pt.func // for list header checkbox
    },

    getDefaultProps: () => ({
        onClick: function() {}
    }),

    render() {
        return d('div.checkbox-wrap', {onClick: this.props.onClick},
            d('input:checkbox.checkbox-animated[readOnly]', {
                style: this.props.color,
                checked: this.props.checked}));
    }

});

module.exports = Checkbox;

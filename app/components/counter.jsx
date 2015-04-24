'use strict';
require('styles/list_header');

var pt = require('react').PropTypes;

var Counter = React.createClass({
    displayName: 'Counter',

    contextTypes: {
        recipe: pt.object.isRequired,
    },

    render() {
        let count = this.context.recipe.counter,
            style = {color: h.counterColor(count, 1)};
        return d('span.counter', {style}, count);
    }
});
module.exports = Counter;

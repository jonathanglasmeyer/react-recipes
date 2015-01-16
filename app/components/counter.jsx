'use strict';
require('styles/list_header');

let pt = require('react').PropTypes;

let Counter = React.createClass({
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

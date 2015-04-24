'use strict';
require('styles/svg');

var Svg = require('../widgets/svg.jsx');

var pt = require('react').PropTypes;

let DeleteIcon  = React.createClass({
    displayName: 'DeleteIcon',

    contextTypes: {
        recipeKey: pt.string.isRequired,
        item: pt.object.isRequired,
    },

    handleDelete() {
        Actions.deleteFromRecipe(this.context.recipeKey, this.context.item.key);
    },

    render() {
        return d(Svg, {
            onClick: this.handleDelete,
            fname: 'delete',
            className: 'right delete-icon'});
    }
});
module.exports = DeleteIcon;

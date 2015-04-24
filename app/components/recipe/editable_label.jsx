'use strict';
require('styles/item');

var ItemEditForm = require('components/item_edit_form');
var Svg = require('./widgets/svg.jsx');
var DeleteIcon = require('components/delete_icon');

var pt = require('react').PropTypes;

/* used in ShoppingListItem, children of ItemWrap*/
let EditableLabel = React.createClass({

    contextTypes: {
        editMode: pt.bool.isRequired,
        item: pt.object.isRequired,
        ui: pt.object.isRequired
    },

    handleClick() {
        Actions.setActiveItem(this.context.item.key);
    },


    render() {
        let style = {cursor: 'text'},
            itemIsActive =
                this.context.ui.modal === 'item' &&
                this.context.ui.activeItem === this.context.item.key;

        let editForm = d(ItemEditForm, {item: this.context.item})

        return d('div', {}, [
            d('div.label-wrap', {onClick: this.handleClick},
                d('label.item.item-recipe', {}, editForm)),
            itemIsActive ? d(DeleteIcon) : null]);
    },
});


module.exports = EditableLabel;
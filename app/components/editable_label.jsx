'use strict';
require('styles/item');

let ItemEditForm = require('components/item_edit_form');
let Svg = require('components/svg');
let DeleteIcon = require('components/delete_icon');

let pt = require('react').PropTypes;

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
            itemIsActive = this.context.ui.activeItem === this.context.item.key;

        let spanOrEditForm = itemIsActive ?
            d(ItemEditForm, {item: this.context.item}) :
            d('span.label-text', {style}, this.context.item.text);

        return d('div', {}, [
            d('div.label-wrap', {onClick: this.handleClick},
                d('label.item.item-recipe', {}, spanOrEditForm)),
            itemIsActive ? d(DeleteIcon) : null]);
    },
});


module.exports = EditableLabel;

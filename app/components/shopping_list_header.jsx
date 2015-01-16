'use strict';
require('styles/list_header');
require('styles/input');
require('styles/svg');

let ListHeaderWrap = require('components/list_header_wrap');
let ShoppingListTitle = require('components/shopping_list_title');
let Checkbox = require('components/checkbox');

let pt = require('react').PropTypes;

let ShoppingListHeader = React.createClass({
    displayName: 'ShoppingListHeader',

    propTypes: {
        items: pt.array
    },

    render() {
        let allChecked = _.all(this.props.items, 'checked');
        let checkAllIcon = d(Checkbox, {
            onClick: Actions.checkAll, checked: allChecked});

        return d(ListHeaderWrap, {}, [
            this.props.items.length > 0 ? checkAllIcon : null,
            d(ShoppingListTitle, {}, 'Einkaufsliste')]);

    }
});

module.exports = ShoppingListHeader;

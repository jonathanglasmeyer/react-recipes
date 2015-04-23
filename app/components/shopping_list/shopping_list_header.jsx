'use strict';
require('styles/list_header');
require('styles/input');
require('styles/svg');

const ShoppingListTitle = require('./shopping_list_title.jsx');
const Checkbox = require('components/checkbox');
const ListHeader = require('../widgets/list_header.jsx');

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

        return d(ListHeader, {}, [
            this.props.items.length > 0 ? checkAllIcon : null,
            d(ShoppingListTitle, {}, 'Einkaufsliste')]);

    }
});

module.exports = ShoppingListHeader;

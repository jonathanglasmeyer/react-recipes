'use strict';
require('styles/list_header');
require('styles/input');
require('styles/svg');

import {StyleResolverMixin} from 'radium';
var pt = require('react').PropTypes;

const Title = require('../widgets/title.jsx');
const Checkbox = require('./checkbox.jsx');
const ListHeader = require('../widgets/list_header.jsx');


const styles = {
}

let ShoppingListHeader = React.createClass({

    displayName: 'ShoppingListHeader',

    mixins: [StyleResolverMixin],

    propTypes: {
        items: pt.array
    },

    render() {
        const allChecked = _.all(this.props.items, 'checked');
        const checkAllIcon = d(Checkbox, {
            onClick: Actions.checkAll, checked: allChecked});
        const style = this.buildStyles(styles);

        const dummy = d('div', {style: {
            height: 20,
            width: 20
        }});

        return d(ListHeader, {style}, [
            dummy,
            d(Title, {}, 'Einkaufsliste'),
            d('span', {}, 'bla')
        ]);

            // this.props.items.length > 0 ? checkAllIcon : null,

    }
});

module.exports = ShoppingListHeader;

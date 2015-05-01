'use strict';
require('styles/list_header');
require('styles/input');
require('styles/svg');

import {StyleResolverMixin} from 'radium';
import {PropTypes} from 'react';

const Title = require('../widgets/title.jsx');
const Checkbox = require('./checkbox.jsx');
const Svg = require('../widgets/svg.jsx');
const ListHeader = require('../widgets/list_header.jsx');



let ShoppingListHeader = React.createClass({

    displayName: 'ShoppingListHeader',

    mixins: [StyleResolverMixin],

    propTypes: {
        items: PropTypes.array
    },

    render() {
        const {items} = this.props;
        const allChecked = _.all(items, 'checked');

        const maybeCheckbox = items.length > 0 ?
            d(Checkbox, {checked: allChecked}) : null;

        return d(ListHeader, {
          left: maybeCheckbox,
          onClickLeft: Actions.checkAll,

          middle: d(Title, 'Einkaufsliste')
        });

    }
});

module.exports = ShoppingListHeader;

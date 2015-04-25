'use strict';

import {PropTypes} from 'react';

var Button = require('../widgets/button.jsx');
var ListFooter = require('../widgets/list_footer.jsx');


let ShoppingListFooter = React.createClass({

    displayName: 'ShoppingListFooter',

    propTypes: {
        items: PropTypes.array
    },

    render() {
      const {items} = this.props;

      const buttonInactive = !_.any(items, item => item.checked);
      const button = d(Button, {inactive: buttonInactive, onClick: Actions.removeAllChecked}, 'aufräumen');

      return d(ListFooter, {
        left: button
      });
    }
});

module.exports = ShoppingListFooter;


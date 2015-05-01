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

      const shouldButtonBeVisible = _.any(items, item => item.checked);
      const maybeButton = shouldButtonBeVisible ?
        d(Button, {onClick: Actions.removeAllChecked}, 'aufräumen') : null;

      return d(ListFooter, {
        left: maybeButton
      });
    }
});

module.exports = ShoppingListFooter;


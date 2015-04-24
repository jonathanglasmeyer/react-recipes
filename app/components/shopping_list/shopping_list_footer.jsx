'use strict';

var Button = require('../widgets/button.jsx');
var Footer = require('../widgets/footer.jsx');

let ShoppingListFooter = React.createClass({
    displayName: 'ShoppingListFooter',

    render() {
        return d(Footer, {},
            d(Button, {onClick: Actions.removeAllChecked}, 'aufräumen'));
    }
});

module.exports = ShoppingListFooter;


'use strict';

var Button = require('components/button');
var FooterWrap = require('components/footer_wrap');

let ShoppingListFooter = React.createClass({
    displayName: 'ShoppingListFooter',

    render() {
        return d(FooterWrap, {},
            d(Button, {onClick: Actions.removeAllChecked}, 'aufräumen'));
    }
});

module.exports = ShoppingListFooter;


'use strict';

let Button = require('components/button');
let FooterWrap = require('components/footer_wrap');

let ShoppingListFooter = React.createClass({
    displayName: 'ShoppingListFooter',

    render() {
        return d(FooterWrap, {},
            d(Button, {onClick: Actions.removeAllChecked}, 'aufräumen'));
    }
});

module.exports = ShoppingListFooter;


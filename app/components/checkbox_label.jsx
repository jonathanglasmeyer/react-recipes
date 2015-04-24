'use strict';
require('styles/item');

var Checkbox = require('components/checkbox');

var pt = require('react').PropTypes;
var cx = require('react/addons').addons.classSet;

/* used in ShoppingListItem, children of ItemWrap*/
let CheckboxLabel = React.createClass({

    propTypes: {
        color: pt.object // needed for background of checkbox ..
    },

    contextTypes: {
        item: pt.object,
    },

    handleCheck() {
        Actions.check(this.context.item.key, !this.context.item.checked);
    },

    render() {
        let item = this.context.item,
            className = cx({'item': true, 'item-done': item.checked});

        return d('div.label-wrap', {onClick: this.handleCheck},
            d('label', {className}, [
                d(Checkbox, {color: this.props.color, checked: item.checked}),
                d('span.label-text', {}, item.text)]));
    },
});


module.exports = CheckboxLabel;

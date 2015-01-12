'use strict';
require('styles/item');

let Checkbox = require('components/checkbox');

let pt = require('react').PropTypes;
let cx = require('react/addons').addons.classSet;

/* used in ShoppingListItem, children of ItemWrap*/
let CheckboxLabel = React.createClass({

    propTypes: {
        item: pt.object,
        onClick: pt.func,
        color: pt.object // needed for background of checkbox ..
    },

    render() {
        let item = this.props.item;

        return <div
            className='label-wrap'
            onClick={this.props.onClick}>

            <label
                className={cx({'item': true, 'item-done': item.checked })}>
                <Checkbox color={this.props.color} checked={item.checked} />
                <span className='label-text'>{item.text}</span>
            </label>
        </div>;
    },
});


module.exports = CheckboxLabel;

'use strict';

require('styles/item.less');
require('styles/checkbox.less');

var pt = require('react').PropTypes;

const BRIGHT = [255, 250, 245];
const DARK = [66,65,64];

// used ShoppingListItem
let Item = React.createClass({
    propTypes: {
        color: pt.string, // hex
        id: pt.string, // the html id attribute
        cursor: pt.string
    },

    contextTypes: {
        i: pt.number,
    },

    getDefaultProps() {
        return {
            id: null,
            color: '',
            cursor: 'pointer'
        };
    },

    render() {
        let i = _.isUndefined(this.context.i) ? this.props.i : this.context.i;
        let style = _.extend(
            this.props.color ? h.categoryColor(this.props.color) : {},
            h.listTransformStyle(i));
        style.cursor = this.props.cursor;

        return d('li', {style, id: this.props.id}, this.props.children);
    }
});

module.exports = Item;

                // <div className='label-wrap'>
                //     <label className='item'>
                //     {this.props.children}
                //     </label>
                // </div>
                // {deleteIcon}
                //         // {checkbox(recent.checked)}
                //         // <span className='label-text'>
                //         //     {recent.title}
                //         // </span>

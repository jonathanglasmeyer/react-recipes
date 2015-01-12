'use strict';

require('styles/item.less');
require('styles/checkbox.less');

let pt = require('react').PropTypes;

// used ShoppingListItem
let ItemWrap = React.createClass({
    propTypes: {
        color: pt.object.isRequired,
        id: pt.string, // the html id attribute
        i: pt.number.isRequired,
    },

    getDefaultProps: () => ({
        id: null
    }),

    render() {
        let style = _.extend(this.props.color, h.listTransformStyle(this.props.i));

        return <li style={style} id={this.props.id}>
            {this.props.children}
        </li>;
    }
});

module.exports = ItemWrap;

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

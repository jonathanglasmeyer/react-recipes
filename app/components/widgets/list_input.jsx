'use strict';
require('styles/input');
require('styles/item');

var pt = require('react').PropTypes;
import {StyleResolverMixin} from 'radium';

var ListItem = require('./list_item.jsx');
var Input = require('./input.jsx');

// const styles = {
// 		borderLeft: 'none',
// 		paddingBottom: '1rem',
// 		borderRight: 'none'
// }


let ListInput = React.createClass({

    displayName: 'ListInput',

    mixins: [StyleResolverMixin],

    contextTypes: {recipeKey: pt.string},

    render() {
        const {handleSubmit, placeholder} = this.props;

        return d(ListItem, {},
            d(Input, {
                placeholder,
                onSubmit: handleSubmit,
                drawSymbol: true,
                resetAfterSubmit: true,
                }));
    }
});

module.exports = ListInput;

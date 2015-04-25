'use strict';

var pt = require('react').PropTypes;
import {StyleResolverMixin} from 'radium';

var ListItem = require('./list_item.jsx');
var Input = require('./input.jsx');
var Svg = require('./svg.jsx');

let ListInput = React.createClass({

    displayName: 'ListInput',

    mixins: [StyleResolverMixin],

    render() {
        const {handleSubmit, placeholder} = this.props;

        const plusSymbol = d(Svg, {className: 'plus-icon', fname: 'add'});

        return d(ListItem, {
          left: plusSymbol,
          middle: d(Input, {
            placeholder,
            onSubmit: handleSubmit,
            resetAfterSubmit: true,
            }),
        });
    }
});

module.exports = ListInput;

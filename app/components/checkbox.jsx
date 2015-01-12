'use strict';
require('styles/item');
require('styles/checkbox');

let pt = require('react').PropTypes;

// used in CheckboxLabel
let Checkbox = React.createClass({
    propTypes: {
        color: pt.object, // needed for background
        checked: pt.bool
    },

    render() {
        return <div className='checkbox-wrap'>
            <input
                className='checkbox-animated'
                style={this.props.color}
                type='checkbox'
                readOnly
                checked={this.props.checked}/>
        </div>;
    }

});

module.exports = Checkbox;

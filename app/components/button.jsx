'use strict';

require('styles/button.less');

// var Ripple = require('library/ripple');

module.exports = React.createClass({
    render() {
        return (
            <div className='button-flat' onTouchStart={this.props.onClick}>
                <div className='text-center uppercase'>{this.props.text}</div>
            </div>
        );
    }
});

'use strict';

require('styles/button.less');

let cx = require('react/addons').addons.classSet;

const COLORS = {red: '#F44336'};

let Button = React.createClass({
    render() {
        let {noActive, text, handleClick, color} = this.props;
        let className = cx({'button-flat': !noActive, 'button-no-active': noActive});

        return (
            <div className={className} onTouchEnd={handleClick}>
                <div style={{color: COLORS[color]}} className='text-center uppercase'>{text}</div>
            </div>
        );
    }
});

module.exports = Button;

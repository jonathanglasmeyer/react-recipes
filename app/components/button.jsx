'use strict';

require('styles/button.less');

let cx = require('react/addons').addons.classSet;

const COLORS = {red: '#F44336'};

let Button = React.createClass({

    getDefaultProps: () => ({
        handleClick: null
    }),

    getInitialState: () => ({
        active: false // render with background, touch events
    }),

    handleTouchStart() {
        if (this.props.handleClick) {
            this.setState({active: true});
            this.props.handleClick();
        }
    },
    handleTouchEnd() {
        if (this.props.handleClick) {
            this.setState({active: false});
        }
    },

    render() {
        let {noActive, text, color} = this.props;
        let className = cx({'button-flat': !noActive,
                           'button-no-active': noActive,
                           'active': this.state.active });

        return (
            <div className={className}
                onTouchStart={this.handleTouchStart}
                onTouchEnd={this.handleTouchEnd}>
                <div style={{color: COLORS[color]}} className='text-center uppercase'>{text}</div>
            </div>
        );
    }
});

module.exports = Button;

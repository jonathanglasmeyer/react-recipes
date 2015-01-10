'use strict';

require('styles/button.less');

let cx = require('react/addons').addons.classSet;
let helpers = require('helpers');

const COLORS = {red: '#F44336', green: '#5C832F'};


let Button = React.createClass({


    getDefaultProps: () => ({
        handleClick: null
    }),

    getInitialState: () => ({
        active: false // render with background, touch events
    }),

    // event() {
    //     this.props.handleClick();


    handleTouchStart() {
        if (this.props.handleClick) {
            this.setState({active: true});
        }
    },

    handleTouchEnd() {
        if (this.props.handleClick) {
            this.setState({active: false});
            this.props.handleClick();
        }
    },

    handleClick() {
        if (!helpers.hasTouch()) {
            if (this.props.handleClick) {
                this.props.handleClick();
            }
        }
    },

    render() {
        let {noActive, text, color} = this.props;
        let className = cx({'button-flat': true,
                           'active': this.state.active });

        return (
            <div className={className}
                onTouchStart={this.handleTouchStart}
                onTouchEnd={this.handleTouchEnd}
                onClick={this.handleClick}>
                <div style={{color: COLORS[color]}} className='text-center uppercase'>{text}</div>
            </div>
        );
    }
});

module.exports = Button;

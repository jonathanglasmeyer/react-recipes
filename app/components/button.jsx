'use strict';

require('styles/button.less');

let cx = require('react/addons').addons.classSet;
let helpers = require('helpers');

const COLORS = {red: '#F44336', green: '#5C832F'};

let pt = require('react').PropTypes;

let Button = React.createClass({

    propTypes: {
        children: pt.string.isRequired,
        onClick: pt.func.isRequired
    },

    getDefaultProps: () => ({
        onClick: null
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

    render() {
        let {noActive, text, color} = this.props;
        let className = cx({'button-flat': true,
                           'active': this.state.active });

        return (
            <div className={className}
                onClick={this.props.onClick}>
                <div style={{color: COLORS[color]}} className='text-center uppercase'>{this.props.children}</div>
            </div>
        );
    }
});

module.exports = Button;

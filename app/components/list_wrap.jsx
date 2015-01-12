'use strict';
require('styles/list');

let ListHeader = require('components/list_header');
let Footer = require('components/footer');

let pt = require('react').PropTypes;

let ListWrap = React.createClass({
    propTypes: {
        style: pt.object,
        open: pt.bool,
        height: pt.number
    },

    getDefaultProps: () => ({
        open: true
    }),

    render() {
        let style = {height: this.props.height};
        return (
            <div
                className='items'
                style={style}>

                <ul>
                {/*<ListHeader {...this.props} />*/}
                    {a.fadingSlow(this.props.open ? this.props.children : null)}
                </ul>
                {/*this.props.open ? <Footer {...this.props}/> : null */}
            </div>
        );
    }
});

module.exports = ListWrap;

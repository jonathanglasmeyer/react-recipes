'use strict';
require('styles/footer.less');

var pt = require('react').PropTypes;

let FooterWrap = React.createClass({
    displayName: 'FooterWrap',

    contextTypes: {
        percent: pt.number,
    },

    render() {
        let style = {opacity: this.context.percent || 1};

        return d('div#footer', {style}, d('div.footer-content', {}, this.props.children));
    }
});

module.exports = FooterWrap;


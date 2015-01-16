'use strict';
require('styles/footer.less');

let FooterWrap = React.createClass({
    displayName: 'FooterWrap',

    render() {
        return d('div#footer', {}, d('div.footer-content', {}, this.props.children));
    }
});

module.exports = FooterWrap;


'use strict';
require('styles/svg.less');

var pt = require('react').PropTypes;

var Svg = React.createClass({
    displayName: 'Svg',

    propTypes: {
        onClick: pt.func
    },

    getDefaultProps() {
        return {
            onClick: () => {}
        };
    },

    render() {
        const {fname, className} = this.props;
        const style = {cursor: 'pointer'};
        const onClick = this.props.onClick;
        const dangerouslySetInnerHTML = {__html: 
            require('img/' + fname + '.svg')};

        return d('div.svg', {
            className, style, dangerouslySetInnerHTML, onClick
        });
    }
});
module.exports = Svg;


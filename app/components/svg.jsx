'use strict';
require('styles/svg.less');

let pt = require('react').PropTypes;

let Svg = React.createClass({
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
        let {fname, className} = this.props,
            style = {cursor: 'pointer'},
            dangerouslySetInnerHTML = {__html: require('img/' + fname + '.svg')},
            onClick = this.props.onClick;
        return d('div.svg', {className, style, dangerouslySetInnerHTML, onClick});
    }
});
module.exports = Svg;


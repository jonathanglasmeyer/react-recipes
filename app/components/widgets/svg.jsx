'use strict';
require('styles/svg.less');


import {PropTypes} from 'react';
import {Color, Dimen, Values} from 'styles/vars.js';
import {StyleResolverMixin} from 'radium';

const styles = {
  fill: Color.greyDark,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  height: Dimen.Icon.size,

  modifiers: [{doubleSize: {height: Dimen.Icon.size * 2}}]
};

var Svg = React.createClass({

    displayName: 'Svg',

    mixins: [StyleResolverMixin],

    propTypes: {
      fname: PropTypes.string,
      color: PropTypes.string,
      doubleSize: PropTypes.bool
    },

    render() {
        const {fname, className, color} = this.props;

        let style = this.buildStyles(styles);
        if (color) style.fill = color;


        const dangerouslySetInnerHTML = {__html:
            require('img/' + fname + '.svg')};

        return d('div.svg', {
            className, style, dangerouslySetInnerHTML
        });
    }
});
module.exports = Svg;


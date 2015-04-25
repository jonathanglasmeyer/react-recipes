'use strict';
require('styles/list_header');

var cx = require('react/addons').addons.classSet;
import {PropTypes} from 'react';

import {StyleResolverMixin} from 'radium';
import {Element, Dimen} from 'styles/vars.js';

var ListItem = require('./list_item.jsx');

const styles = {
  height: Dimen.ListHeader.height,
  background: Element.ListHeader.background,
  borderBottom: `1px solid ${Element.ListHeader.borderBottom}`,
  marginBottom: Dimen.List.marginTopBottom
};

let ListHeader = React.createClass({

  displayName: 'ListHeader',

  propTypes: {
    left: PropTypes.element,
    middle: PropTypes.element,
    right: PropTypes.element,
    middleCentered: PropTypes.bool,
    onClickLeft: PropTypes.func,
    onClickMiddle: PropTypes.func,
    onClickRight: PropTypes.func,
    onClickWhole: PropTypes.func
  },

  mixins: [StyleResolverMixin],

    render() {
      const style = this.buildStyles(styles);

      return d(ListItem, Object.assign({style}, this.props));
    }

});

module.exports = ListHeader;

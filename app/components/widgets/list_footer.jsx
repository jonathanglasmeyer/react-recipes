'use strict';
require('styles/list_header');

var cx = require('react/addons').addons.classSet;
import {PropTypes} from 'react';

import {StyleResolverMixin} from 'radium';
import {Element, Dimen} from 'styles/vars.js';

var ListItem = require('./list_item.jsx');

const styles = {
  height: Dimen.ListFooter.height,
  marginTop: Dimen.List.marginTopBottom,
  // borderTop: `1px solid ${Element.ListHeader.borderBottom}`,
};

let ListFooter = React.createClass({

  displayName: 'ListFooter',

  propTypes: {
    left: PropTypes.element,
    middle: PropTypes.element,
    right: PropTypes.element,
    middleCentered: PropTypes.bool
  },

  mixins: [StyleResolverMixin],

    render() {
      const style = this.buildStyles(styles);

      return d(ListItem,
          Object.assign({style}, this.props));

      // return d('li#list-header', {
      //     className: cx({'active': this.state.active }),
      //     onTouchStart: this.handleTouchStart,
      //     onTouchEnd: this.handleTouchEnd},

      //     this.props.children);
    }

});

module.exports = ListFooter;


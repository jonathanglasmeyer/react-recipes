'use strict';

var pt = require('react').PropTypes;
import {StyleResolverMixin, MatchMediaItem} from 'radium';
import {Element, Dimen, Values} from 'styles/vars.js';

const styles = {
  margin: 8,
  marginTop: 24,
  padding: 0,
  borderRadius: 2,
  maxWidth: 360,

  background: Element.List.background,
  boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.20)',
  listStyleType: 'none',

  mediaQueries: [{
    smartphone: {
      marginTop: 8
    }
  }]
}

let List = React.createClass({

  displayName: 'List',

  mixins: [StyleResolverMixin, MatchMediaItem],


  contextTypes: {
    ui: pt.object.isRequired,
    isOpen: pt.bool.isRequired,
    height: pt.number.isRequired,
  },

    render() {
      const style = this.buildStyles(styles);

      return d('ul', {style}, this.props.children);

    }
});

module.exports = List;

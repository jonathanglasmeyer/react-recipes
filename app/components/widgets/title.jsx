'use strict';
// require('styles/list_header');
// require('./shopping_list_title.less');
import {StyleResolverMixin} from 'radium';

var pt = require('react').PropTypes;

const styles = {
		fontWeight: 600
}

let Title = React.createClass({

    displayName: 'Title',

    mixins: [StyleResolverMixin],

    propTypes: {
        children: pt.string.isRequired,
    },

    render() {
      const text = this.props.children;
      const style = this.buildStyles(styles);

      return d('span', {style}, text);
    }
});
module.exports = Title;

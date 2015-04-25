'use strict';

var pt = require('react').PropTypes;
import Svg from '../widgets/svg.jsx';
import {Color, Dimen, Values} from 'styles/vars.js';

let Checkbox = React.createClass({
  propTypes: {
    checked: pt.bool.isRequired,
  },

  render() {
    const {checked} = this.props;

    return d(Svg, {
      fname: `checkbox-${checked? 'marked' : 'blank'}`,
      color: checked ? Color.accent : null
    });
  }

});

module.exports = Checkbox;

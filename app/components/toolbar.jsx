'use strict';

import {PropTypes} from 'react';
import {StyleResolverMixin} from 'radium';
import {Color, Dimen, Values} from 'styles/vars.js';

import ListItemLeft from './widgets/list_item/list_item_left.jsx';
import Title from './widgets/title.jsx';

const styles = {
  position: 'fixed',
  left: 0,
  right: 0,
  top: 0,
  zIndex: 1,

  display: 'flex',
  alignItems: 'center',
  
  width: '100%',
  height: Dimen.Toolbar.height,
  padding: Dimen.Body.paddingLeftRight,
  background: Color.primary,
  boxShadow: '0 2px 5px rgba(0,0,0,0.15)'
};

const Toolbar = React.createClass({
  displayName: 'Toolbar',

  propTypes: {

  },

  mixins: [StyleResolverMixin],

  render() {
    const style = this.buildStyles(styles);
    return d('header', {style},
      d(ListItemLeft, {}, d(Title, {white: true, header: true}, 'Recipes'))
    );
  }

});

module.exports = Toolbar;

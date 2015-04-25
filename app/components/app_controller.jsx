'use strict';
require('base/less/style.less');
require('styles/app');

var Reflux = require('reflux');
import {PropTypes} from 'react';
import {MatchMediaBase} from 'radium';

var ItemStore = require('item_store');
var UIStore = require('ui_store');
var RecipesStore = require('recipes_store');

var App = require('./app.jsx');

import {ScreenSizes} from 'styles/vars.js';
MatchMediaBase.init(ScreenSizes);

let AppController = React.createClass({

  mixins: [
    MatchMediaBase,
    Reflux.connect(ItemStore, 'items'),
    Reflux.connect(RecipesStore, 'recipes'),
    Reflux.connect(UIStore, 'ui')
  ],

  getInitialState() {
    return {
      items: [],
      recipes: [],
      recents: [],
      ui: {openRecipe: null}
    };
  },

  childContextTypes: {
    ui: PropTypes.object.isRequired
  },

  getChildContext() {
    return {
      ui: this.state.ui
    };
  },

  componentWillMount() {
    Actions.init();
  },

  render() {
    const {items} = this.state;

    return d(App, {items});

  }
});

module.exports = AppController;

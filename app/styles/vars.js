var C = require('color');
import {makeStates} from './helpers.js';

let DEBUG = 0;
// DEBUG = 1;

// -----------------------------------------------------------------------------

export const Color = {
  black: {
    dividers: 'rgba(0,0,0,0.12)',
    hint: 'rgba(0,0,0,0.26)', // or inactive icon
    iconsOrSecondary: 'rgba(0,0,0,0.54)',
    text: 'rgba(0,0,0,0.87)'
  },
  grey: '#EEEEEE',
  greyDark: '#555',
  accent: Theme.accent,
  accent2: Theme.accent2 || Theme.accent,
  primaryDark: c(Theme.primary).darken(0.2).rgbString(),
  primary: Theme.primary

};

// -----------------------------------------------------------------------------

export const Values = {
  fontFamily: "'Roboto Slab', sans-serif",
  fontFamilySans: "'Roboto', sans-serif",
  fontSize: {
    title: 20,
    body: 17
  }
};

export const ScreenSizes = {
  smartphone: '(max-width: 360px)'
};

// -----------------------------------------------------------------------------

export let Element = {};

Element.Body = {
  fontSize: Values.fontSize.body,
  background: c(Color.primary).alpha(0.08).rgbString()
  // background: Color.grey
};

Element.Header = {
  fontSize: Values.fontSize.title - 1
};

Element.List = {
  background: 'white'
};

Element.ListHeader = {
  background: Element.List.background,
  borderBottom: Color.black.dividers
  // title fontSize directly from Element.Title
};

Element.ListItem = {
  debugBorder: DEBUG ?
    `1px solid ${c(Color.greyDark).alpha(.4).rgbString()}` : '',
  states: makeStates('#999', 0.06, 0.11)
};


Element.Title = {
  fontSize: Values.fontSize.title
};

// -----------------------------------------------------------------------------

export const Dimen = {

  Body: {
    paddingLeftRight: 8
  },

  Toolbar: {
    height: 56
  },

  List: {
    marginTopBottom: 8 // extra space from header/footer to list content
  },

  ListHeader: {
    heightBig: 72,
    height: 64
  },

  ListItem: {
    height: 56,
    leftDivSize: 72,
    rightDivSize: 56,
    paddingLeftRight: 16
  },

  ListFooter: {
    height: 56
  },


  Icon: {
    size: 24
  },

  // touch target height: 48
  Button: {
    touchHeight: 48,
    height: 36,
    paddingLeftRight: 8,
    paddingExternalLeftRight: 4

  }

};


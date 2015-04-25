var C = require('color');
import {makeStates} from './helpers.js';

let DEBUG = 0;
// DEBUG = 1;

export const Color = {
  black: {
    dividers:         'rgba(0,0,0,0.12)',
    hint:             'rgba(0,0,0,0.26)', // or inactive icon
    iconsOrSecondary: 'rgba(0,0,0,0.54)',
    text:             'rgba(0,0,0,0.87)'
  },
  grey: '#EEEEEE',
  greyDark: '#555',
  primary: '#FF5722',
  primaryDark: '#E64A19',
  accent: '#8BC34A',

};

export let Element = {};

Element.List = {
  background: 'white',
};

Element.ListHeader = {
  background: Element.List.background,
  borderBottom: Color.black.dividers
};

Element.ListItem = {
  debugBorder: DEBUG ? 
    `1px solid ${C(Color.greyDark).alpha(.4).rgbString()}` : '',
  states: makeStates('#999', 0.06, 0.21)
}

Element.Title = {
  fontSize: 21
}

Element.BodyText = {
  fontSize: 17
}

Element.Button = {
states: makeStates(Color.primary, 0.08, 0.15)
}


const grid = 8;
// 6*8 = 48
// 7*8 = 56

export const Dimen = {

  List: {
    marginTopBottom: 8
  },

  ListItem: {
    height: 48,
    leftDivSize: 72,
    rightDivSize: 56,
    paddingLeftRight: 16
  },

  ListFooter: {
    height: 56
  },

  ListHeader: {
    height: 72,
  },

  Icon: {
    size: 24
  },

  // touch target height: 48
  Button: {
    touchHeight: 48,
    height: 36,
    paddingLeftRight: 8,
    paddingExternalLeftRight: 4,

  },

};

export const Values = {
  fontFamily: "'Roboto Slab', sans-serif",
  fontFamilySans: "'Roboto', sans-serif",
};

export const ScreenSizes = {
  smartphone: '(max-width: 360px)'
}

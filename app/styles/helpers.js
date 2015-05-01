var C = require('color');

export function makeStates(color, alphaHover, alphaFocusActive) {
  return [
    {hover: {background: C(color).alpha(alphaHover).rgbString()}}
  ];
    // {active: {background: C(color).alpha(alphaFocusActive).rgbString()}}
}

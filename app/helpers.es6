'use strict';
var categories = require('data/categories.json');
/*jslint bitwise: true */

function contains(string1, string2) {
    // case independent
   return string1.toLowerCase().indexOf(string2.toLowerCase()) > -1;
}

module.exports = {
    hexToRgb(hex) {
        var bigint = parseInt(hex, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;

        return r + "," + g + "," + b;
    },

    listTransformStyle(index) {
        return { transform: `translate3d(0, ${100*index}%, 0)` };
    },

    category(itemName) {
        let cat = _.find(categories, cat =>
             _.any(cat.items, catItem => contains(itemName, catItem)));
        return cat === undefined ?
            { name: 'undefined', id: 999, color: ''} :
            { name: cat.name, id: cat.id, color: cat.color };
    }

};

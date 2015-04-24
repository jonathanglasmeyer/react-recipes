'use strict';
var categories = require('data/categories.json');

/*jslint bitwise: true */

function contains(string1, string2) {
    // case independent
   return string1.toLowerCase().indexOf(string2.toLowerCase()) > -1;
}

// require("imports?this=>window!jquery-smooth-scroll");

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
    },

    categoryColor(hexColor) {
        return {backgroundColor:
            `rgba(${this.hexToRgb(hexColor)}, .20)`};
    },

    categorySorted(items) {
        let categorizedItems = _.each(items, item =>
                                         item.category = this.category(item.text));
        return _.sortBy(categorizedItems, item => item.category.id);
    },

    itemComponentList(items, componentType, startIndex=1, additionalProps={}) {
        return _.map(this.categorySorted(items), (item, i) =>
            d(componentType,
              _.extend(additionalProps, {key: item.key, i: startIndex+i, item})));
    },

    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    },

    viewportHeight() {
        return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    },

    offset(element) {
        return $(element).offset().top - $('.main').offset().top + 200;
    },

    scrollTo(pos, speed) {
        $('.main').animate({
                // scrollTop: this.props.listHeight-230
                scrollTop: pos
        }, speed);
    },

    hasTouch() {
        return 'ontouchstart' in window;
    },

    counterColor(counter, trans) {
        return `rgba(126, 170, ${Math.max(250-50*counter,0)}, ${trans})`;
    },

    counterColor_(counter) {
        return [126, 170, Math.max(250-50*counter,0)];
    },

    mergeColors(c1,c2, weightFirst=.1) {

        // weight of the first, 10 based
        // first: accent color;
        let f = (a,b,w) => Math.floor((a*w + b*(1-w)));
        let r = f(c1[0], c2[0], weightFirst);
        let g = f(c1[1], c2[1], weightFirst);
        let b = f(c1[2], c2[2], weightFirst);
        let result =  `rgb(${r},${g},${b})`;
        console.log(result);
        return result;
    }

};

var mcFly = require('mcFly');

module.exports = mcFly.createActions({
    add_item(text) {
        return {
            actionType: 'ADD_ITEM',
            text: text
        }
    }
});

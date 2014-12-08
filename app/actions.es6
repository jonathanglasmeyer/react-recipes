var mcFly = require('mcFly');

module.exports = mcFly.createActions({
    add_item(text) {
        return {
            actionType: 'ADD_ITEM',
            text: text
        }
    },

    init() {
        return { actionType: 'INIT' }
    },

    check(key) {
        return {
            actionType: 'CHECK',
            key: key
        }
    },

    delete(key) {
        return {
            actionType: 'DELETE',
            key: key
        }
    }

});

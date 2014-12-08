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

    check(key, state) {
        return {
            actionType: 'CHECK',
            key: key,
            state: state
        }
    },

    delete(key) {
        return {
            actionType: 'DELETE',
            key: key
        }
    }

});

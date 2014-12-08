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

    toggle(key, state) {
        return {
            actionType: 'TOGGLE',
            key: key,
            state: state
        }
    }


});

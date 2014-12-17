'use strict';

var mcFly = require('mcFly');

module.exports = mcFly.createActions({
    addItem(text) {
        return {
            actionType: 'ADD_ITEM',
            text: text
        };
    },

    init() {
        return { actionType: 'INIT' };
    },

    check(key, state) {
        return {
            actionType: 'CHECK',
            key: key,
            state: state
        };
    },

    delete(key) {
        return {
            actionType: 'DELETE',
            key: key
        };
    },

    removeAllChecked() {
        return {
            actionType: 'REMOVE_ALL_CHECKED'
        };
    },

    checkAll() {
        return {
            actionType: 'CHECK_ALL'
        };
    },

    saveAsRecipe(recipeName) {
        return {
            actionType: 'SAVE_AS_RECIPE',
            recipeName
        };
    },

    deleteRecipe(recipeKey) {
        return {
            actionType: 'DELETE_RECIPE',
            recipeKey
        };
    }

});

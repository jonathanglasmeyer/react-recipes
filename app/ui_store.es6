'use strict';

let Reflux = require('reflux');

let actions = require('actions');

module.exports = Reflux.createStore({
    listenables: actions,

    onInit() {
        this.ui = {openRecipe: null};
        this.trigger(this.ui);
    },

    onSetActiveItem(itemKey) {
        this.ui.activeItem = itemKey;
        this.ui.modal = 'item';
        this.ui.editMode = true;
        this.trigger(this.ui);
    },

    onSetActiveInput() {
        this.ui.modal = 'input';
        this.trigger(this.ui);
    },

    // onSetEditPageNumber(itemKey) {
    //     this.ui.activeItem = null;
    //     this.ui.editPageNumber = true;
    //     this.trigger(this.ui);
    // },

    onStartEditMode() {
        this.ui.editMode = true;
        this.ui.modal = null;
        this.trigger(this.ui);
    },

    onEndEditMode() {
        this.ui.editMode = false;
        this.ui.activeItem = null;
        this.trigger(this.ui);
    },

    onSetOpenRecipe(recipeKey) {
        this.ui.openRecipe = recipeKey;
        this.ui.editMode = false;
        this.trigger(this.ui);
    },

    onSetConfirm(bool) {
        this.ui.modal = bool ? 'confirm' : null;
        this.trigger(this.ui);
    }

});

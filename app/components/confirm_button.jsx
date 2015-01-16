'use strict';

require('styles/button');

let Button = require('components/button');
let Actions = require('actions');

let pt = require('react').PropTypes;

let ConfirmButton = React.createClass({

    contextTypes: {
        recipeKey: pt.string.isRequired,
        ui: pt.object.isRequired
    },

    handleStartConfirm() {
        Actions.setConfirm(true);
    },

    handleCancel() {
        Actions.setConfirm(false);
    },

    handleDelete() {
        Actions.deleteRecipe(this.context.recipeKey);
    },


    render() {
        let activeConfirm = this.context.ui.modal === 'confirm';

        let button = d(Button, {key:3, onClick:this.handleStartConfirm},'löschen');

        let confirmal = d('div.confirmal', {}, [
            d(Button,
              {key: 1, onClick: this.handleCancel}, 'abbrechen'),
            d(Button,
              {color: 'red', key: 2, onClick: this.handleDelete}, 'löschen')]);


        // dynamic choose the right animation function
        let animation = activeConfirm ? a.slideinSmall : a.slideinSmallLeft;

        return animation(activeConfirm ? confirmal : button);
    }
});
module.exports = ConfirmButton;

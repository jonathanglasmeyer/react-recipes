'use strict';

let Button = require('components/button');
let FooterWrap = require('components/footer_wrap');
let ConfirmButton = require('components/confirm_button');

let pt = require('react').PropTypes;

let RecipeListFooter = React.createClass({
    displayName: 'RecipeListFooter',

    contextTypes: {
        recipeKey: pt.string.isRequired,
        editMode: pt.bool.isRequired,
    },

    render() {
        let startEditModeOrDone = d('div.button-right', {},
            this.context.editMode ?
                d(Button, {onClick: Actions.endEditMode, color: 'green'}, 'fertig') :
                d(Button, {onClick: Actions.startEditMode}, 'bearbeiten'));

        return d(FooterWrap, {}, [
            d(ConfirmButton),
            startEditModeOrDone
        ]);
    }
});

module.exports = RecipeListFooter;


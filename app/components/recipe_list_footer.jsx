'use strict';

var Button = require('components/button');
var FooterWrap = require('components/footer_wrap');
var ConfirmButton = require('components/confirm_button');

var pt = require('react').PropTypes;

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


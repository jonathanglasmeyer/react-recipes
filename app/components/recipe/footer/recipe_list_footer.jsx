'use strict';

var Button = require('../../widgets/button.jsx');
var Footer = require('../../widgets/list_footer.jsx');
var ConfirmButton = require('./confirm_button.jsx');

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

        return d(Footer, {}, [
            d(ConfirmButton),
            startEditModeOrDone
        ]);
    }
});

module.exports = RecipeListFooter;


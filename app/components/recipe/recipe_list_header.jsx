'use strict';
require('styles/list_header');
require('styles/input');
require('styles/svg');

var ListHeader = require('../widgets/list_header.jsx');
var RecipeListTitle = require('./recipe_list_title.jsx');
var TitleEdit = require('./title_edit.jsx');
var PageNumber = require('./page_number.jsx');
var AddAllIcon = require('./add_all_icon.jsx');
var Counter = require('./counter.jsx');

var pt = require('react').PropTypes;

let RecipeListHeader = React.createClass({
    displayName: 'RecipeListHeader',

    contextTypes: {
        isOpen: pt.bool.isRequired,
        editMode: pt.bool.isRequired,
    },

    render() {
        let counterOrPageNr = this.context.isOpen ? PageNumber : Counter;
        let titleOrEdit = this.context.editMode ? TitleEdit : RecipeListTitle;

        return d(ListHeader, {},
             _.map([ titleOrEdit, AddAllIcon, counterOrPageNr], c => d(c)));
    }
});

module.exports = RecipeListHeader;

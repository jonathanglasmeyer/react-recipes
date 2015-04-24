'use strict';
require('styles/list_header');
require('styles/input');
require('styles/svg');

var ListHeader = require('./widgets/list_header.jsx');
var RecipeListTitle = require('components/recipe_list_title');
var TitleEdit = require('components/title_edit');
var PageNumber = require('components/page_number');
var AddAllIcon = require('components/add_all_icon');
var Counter = require('components/counter');

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

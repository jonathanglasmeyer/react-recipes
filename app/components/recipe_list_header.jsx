'use strict';
require('styles/list_header');
require('styles/input');
require('styles/svg');

let ListHeader = require('./widgets/list_header.jsx');
let RecipeListTitle = require('components/recipe_list_title');
let TitleEdit = require('components/title_edit');
let PageNumber = require('components/page_number');
let AddAllIcon = require('components/add_all_icon');
let Counter = require('components/counter');

let pt = require('react').PropTypes;

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

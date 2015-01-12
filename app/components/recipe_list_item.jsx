/* @flow */
'use strict';
require('styles/item.less');
require('styles/checkbox.less');
require('styles/list_header');

let cx = require('react/addons').addons.classSet;

let {hexToRgb} = require('helpers');

let Actions = require('actions');
let {listTransformStyle} = require('helpers');
let helpers = require('helpers');
let Svg = require('components/svg');
let animate = require('animate');


let Item = React.createClass({


    propTypes: {
        isRecipeItem: React.PropTypes.bool,
        edit: React.PropTypes.bool,
        data: React.PropTypes.object,
    },

    getInitialState() {
        return {
            added: false,
            checked: false,
            edit: false,
        };
    },

    componentDidUpdate() {
        if (this.props.edit) {
            let element = this.refs.input.getDOMNode();
            $(element).focus();
        }
    },

    handleIngredientAdd() {
        this.setState({added: true});
        Actions.addItem(this.props.data.text);
    },

    handleDelete(e) {
        // we want an animation of the input box when we delete
        // $('#li-input').css({transition: 'all .2s ease-out'});
        e.preventDefault();

        // for shopping list
        if (!this.props.isRecipeItem) {
            Actions.delete(this.props.data.key);

        // for recipes
        } else {
            Actions.deleteFromRecipe(this.props.recipeKey, this.props.data.key);
        }

    },

    handleItemEdited(e) {
        e.preventDefault();
        let element = this.refs.input.getDOMNode();
        let text = element.value.trim();
        if (!text) {
            Actions.setActiveItem(this.props.recipeKey, null);
        } else {
            Actions.renameRecipeItem(
                this.props.recipeKey, this.props.data.key, text);
            Actions.setActiveItem(this.props.recipeKey, null);
        }
    },

    checked() {
        return this.props.data.checked;
    },

    backgroundColor() {
        return this.props.data.category.color ?
            {background:
                `rgba(${hexToRgb(this.props.data.category.color)}, .20)`} :
            {};
    },

    render() {
        let deleteIcon =
            <Svg handleClick={this.handleDelete}
                 fname='delete'
                 className='right delete-icon' />;

        return (
            <ItemWrap style={this.backgroundColor()}>
                <CheckboxLabel />
                {edit ? deleteIcon : null}
            </li>
        );
    }
});

module.exports = Item;

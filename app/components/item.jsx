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

    // componentWillMount() {
    //     if (this.props.data.checked) {
    //         this.setState({checked: true});
    //     }
    // },

    handleClick() {
        this.handleChange();
        console.log(Date.now()-this.startTime);
    },

    handleTouchStart() {
        this.touchCount=0;
        this.startTime=Date.now();
    },

    handleTouchMove() {
        this.touchCount++;
        console.log('touchmove');
    },

    handleTouchEnd() {
        if (this.touchCount === 0) {
            this.handleClick();
        }
    },


    handleChange() {
        // normal case: just check
        if (!this.props.isRecipeItem) {
            // this.setState({checked: !this.state.checked});

            Actions.check(this.props.data.key, !this.props.data.checked);
        } else {
            // for recipes: enter edit mode
            Actions.setActiveItem(this.props.recipeKey, this.props.data.key);
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
        let {key, i, data, isRecipeItem, recipeKey, edit} = this.props;
        // console.log(edit);
        // let edit = false;

        let checkbox = !this.props.isRecipeItem ?
                            <div className='checkbox-wrap'>
                                <input
                                    className='checkbox-animated'
                                    style={this.backgroundColor()}
                                    type='checkbox'
                                    readOnly
                                    checked={this.checked()}/>
                            </div>

                        : null ;

        let deleteIcon =
                    <Svg handleClick={this.handleDelete}
                         fname='delete'
                         className='right delete-icon' />;

        let itemEditForm =
            <form
                className='input-form-title input-form-item'
                onSubmit={this.handleItemEdited}>

                 <input
                    type='text'
                    id='input-title'
                    className='input-item'
                    defaultValue={this.props.data.text}
                    style={{border: 'none'}}
                    ref='input'/>
            </form>;

        return (
            <li
                style={_.extend(this.backgroundColor(),
                                listTransformStyle(this.props.i))}>

                <div className='label-wrap'
                    onTouchStart={this.handleTouchStart}
                    onTouchMove={this.handleTouchMove}
                    onTouchEnd={this.handleTouchEnd}>
                    <label
                        style={{cursor: isRecipeItem ? 'text' : 'pointer'}}
                        className={cx({'item': true,
                                       'item-done': this.checked(),
                                       'item-recipe': this.props.isRecipeItem})}>
                        {checkbox}
                        {!edit ?
                            <span className='label-text'>
                                {this.props.data.text}
                             </span> :
                            itemEditForm
                        }


                    </label>
                </div>
                {edit ? deleteIcon : null}
            </li>
        );
    }
});

module.exports = Item;

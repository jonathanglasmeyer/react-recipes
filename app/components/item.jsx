'use strict';
require('styles/item.less');
require('styles/checkbox.less');

var cx = require('react/addons').addons.classSet;
var {hexToRgb} = require('helpers');

var Actions = require('actions');

var Svg = require('components/svg');

module.exports = React.createClass({

    propTypes: {
        isRecipeItem: React.PropTypes.bool,
        categoryStart: React.PropTypes.bool,
        data: React.PropTypes.object,
    },

    getInitialState() {
        return {
            added: false
        };
    },

    getDefaultProps() {
        return {
            categoryStart: false
        };
    },

    handleChange() {
        Actions.check(this.props.data.key, !this.props.data.checked);
    },

    handleIngredientAdd() {
        this.setState({added: true});
        Actions.addItem(this.props.data.text);
    },

    handleDelete(e) {
        // we want an animation of the input box when we delete
        $('#li-input').css({transition: 'all .2s ease-out'});
        e.preventDefault();
        Actions.delete(this.props.data.key);
    },

    backgroundColor() {
        return this.props.data.category.color ?
                {background:
                    `rgba(${hexToRgb(this.props.data.category.color)}, .15)`} :
                {};
    },

    render() {
        let checkbox = !this.props.isRecipeItem ?
                            (<input
                                className='checkbox-animated'
                                style={this.backgroundColor()}
                                type='checkbox'
                                checked={this.props.data.checked}
                                onChange={this.handleChange} />)
                        : null ;
                            // <Svg
                            //     className='plus-icon'
                            //     fname={!this.state.added ? 'add':'done'} />;


        let deleteIcon = this.props.data.checked && !this.props.isRecipeItem ?
                            <Svg onClick={this.handleDelete}
                                 fname='delete'
                                 className='right delete-icon' />
                        : null;

        return (
            <li className={cx({'category-start': this.props.categoryStart})}
                        style={this.backgroundColor()} >

                <label
                    onClick={this.props.isRecipeItem ?
                                this.handleIngredientAdd : this.handleChange}
                    className={cx({'item': true,
                                   'item-done': this.props.data.checked,
                                   'item-recipe': this.props.isRecipeItem})} >
                    {checkbox}
                    {this.props.data.text}
                    {deleteIcon}
                </label>
            </li>
        );
    }
});


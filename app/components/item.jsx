/* @flow */
'use strict';
require('styles/item.less');
require('styles/checkbox.less');

let cx = require('react/addons').addons.classSet;

let {hexToRgb} = require('helpers');
let Actions = require('actions');
let {listTransformStyle} = require('helpers');


let Item = React.createClass({


    propTypes: {
        isRecipeItem: React.PropTypes.bool,
        data: React.PropTypes.object,
    },

    getInitialState() {
        return {
            added: false
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
                `rgba(${hexToRgb(this.props.data.category.color)}, .20)`} :
            {};
    },

    render() {
        let checkbox = !this.props.isRecipeItem ?
                            <div className='checkbox-wrap'>
                                <input
                                    className='checkbox-animated'
                                    style={this.backgroundColor()}
                                    type='checkbox'
                                    readOnly
                                    checked={this.props.data.checked}/>
                            </div>

                        : null ;

        return (
            <li
                style={_.extend(this.backgroundColor(),
                                listTransformStyle(this.props.i))}>

                <div className='label-wrap'
                     onTouchStart={this.handleChange} >
                    <label
                        className={cx({'item': true,
                                       'item-done': this.props.data.checked,
                                       'item-recipe': this.props.isRecipeItem})}>
                        {checkbox}
                        <span className='label-text'>{this.props.data.text}</span>
                    </label>
                </div>
            </li>
        );
    }
});

module.exports = Item;

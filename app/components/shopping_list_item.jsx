/* @flow */
'use strict';
require('styles/item');
require('styles/checkbox');

let pt = require('react').PropTypes;

let ItemWrap = require('components/item_wrap');
let CheckboxLabel = require('components/checkbox_label');
let cx = require('react/addons').addons.classSet;

let ShoppingListItem = React.createClass({

    propTypes: {
        item: pt.object,
        i: pt.number.isRequired,
    },

   backgroundColor() {
        return this.props.item.category.color ?
            {background:
                `rgba(${h.hexToRgb(this.props.item.category.color)}, .20)`} :
            {};
    },

    handleCheck() {
        console.log('foo');
        Actions.check(this.props.item.key, !this.props.item.checked);
    },

    render() {
        let color = {backgroundColor:
            `rgba(${h.hexToRgb(this.props.item.category.color)}, .20)`};

        return <ItemWrap
            color={color}
            i={this.props.i}>

            <CheckboxLabel 
                onClick={this.handleCheck}
                item={this.props.item}/>
        </ItemWrap>;
    },


    render_alt() {

        // let deleteIcon =
        //     <Svg
        //         handleClick = {this.handleDelete}
        //         fname       = 'delete'
        //         className   = 'right delete-icon' />;


        return <ItemWrap color={color} i={this.props.i}>
            <CheckboxLabel item={this.props.item} color={color}/>
        </ItemWrap>;
    }
});

module.exports = ShoppingListItem;

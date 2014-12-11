'use strict';
require('styles/item.less');
require('styles/checkbox.less');

var cx = require('react/addons').addons.classSet;
var {hexToRgb} = require('helpers');

var Actions = require('actions');

var Svg = require('components/svg');

let DEBUG = 0;
// DEBUG = 1;


module.exports = React.createClass({

    getDefaultProps() {
        return {
            categoryStart: false
        };
    },

    handleChange() {
        Actions.check(this.props.data.key, !this.props.data.checked);
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
        return (
            <li className={cx({'category-start': this.props.categoryStart})}
                        style={this.backgroundColor()} >

                <label className={
                    cx({'item': true,
                        'item-done': this.props.data.checked })} >
                    <input
                        className='checkbox-animated'
                        style={this.backgroundColor()}
                        type='checkbox'
                        checked={this.props.data.checked}
                        onChange={this.handleChange}
                    />
                    {this.props.data.text}
                    { DEBUG ? this.props.data.category.id : null}
                    { DEBUG ? this.props.data.category.color : null}
                    {this.props.data.checked ?
                        <Svg onClick={this.handleDelete} fname='delete'
                             className='right delete-icon' />
                    : null}
                </label>
            </li>
        );
    }
});


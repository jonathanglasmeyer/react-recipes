require('styles/item.less');
require('styles/checkbox.less');

var cx = require('react/addons').addons.classSet;
var Actions = require('actions');

var Svg = require('components/svg');

const DEBUG = 0;
// const DEBUG = 1;

module.exports = React.createClass({

    handleChange(e) {
        Actions.check(this.props.data.key, !this.props.data.checked);
    },

    handleDelete(e) {
        // we want an animation of the input box when we delete
        $('#li-input').css({transition: 'all .2s ease-out'});
        e.preventDefault();
        Actions.delete(this.props.data.key);
    },

    render() {
        return (
            <li>
                <label className={
                    cx({'item': true,
                        'item-done': this.props.data.checked })}
                    style={ this.props.data.category.color &&
                            !this.props.data.checked ?
                            {color: this.props.data.category.color} : {} }>
                    <input
                        className='checkbox-animated'
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


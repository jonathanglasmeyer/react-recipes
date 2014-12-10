require('styles/item.less');
require('styles/checkbox.less');

var cx = require('react/addons').addons.classSet;
var Actions = require('actions');

var Svg = require('components/svg');

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

    isCategory(cat_id) {
        return !this.props.data.checked && this.props.data.category === cat_id ;
    },


    render() {
        return (
            <li>
                <label className={
                    cx({'item': true,
                        'item-done': this.props.data.checked
                    })}>
                    <input
                        className='checkbox-animated'
                        type='checkbox'
                        checked={this.props.data.checked}
                        onChange={this.handleChange}
                    />
                    {this.props.data.text}
                    {this.props.data.checked ?
                        <Svg onClick={this.handleDelete} fname='delete'
                             className='right delete-icon' />
                    : null}
                </label>
            </li>
        );
    }
});


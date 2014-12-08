require('styles/list_item.less');
require('styles/checkbox.less');
var cx = require('react/addons').addons.classSet;
var Actions = require('actions');


module.exports = React.createClass({

    handleChange(e) {
        if (this.props.data.checked) {
            Actions.delete(this.props.data.key);
        } else {
            Actions.check(this.props.data.key);
        }
    },

    render() {
        return (
            <li>
                <label className={
                    cx({'checkbox-label': true,
                        'checkbox-label-done': this.props.data.checked})}>
                    <input
                        className='checkbox-animated'
                        type='checkbox'
                        checked={this.props.data.checked}
                        onChange={this.handleChange}
                    />
                    {this.props.data.text}
                </label>
            </li>
        );
    }
});


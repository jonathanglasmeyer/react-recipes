require('styles/list_item.less');
require('styles/checkbox.less');
var cx = require('react/addons').addons.classSet;


module.exports = React.createClass({

    // getInitialState() {
    //     return {
    //         checked: false
    //     }
    // },

    handleChange(e) {
        this.props.onSyncToggleState(this.props.data.key, 
                                     !this.props.data.checked);
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


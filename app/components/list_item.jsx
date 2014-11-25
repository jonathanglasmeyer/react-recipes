require('styles/list_item.less');
require('styles/checkbox.less');
var cx = require('react/addons').addons.classSet;


module.exports = React.createClass({
    render() {
        return (
            <li> 
                <label className='checkbox-label'>
                    <input 
                        className='checkbox-animated' 
                        type='checkbox' 
                        checked={this.props.checked}
                    />
                    {this.props.name}
                </label>
            </li>
        );
    }
});


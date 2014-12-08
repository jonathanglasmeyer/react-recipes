require('styles/list_item.less');
require('styles/checkbox.less');
var cx = require('react/addons').addons.classSet;


module.exports = React.createClass({
    getInitialState() {
        return {
            checked: false
        }
    },

    handleChange(e) {
        this.setState({checked: !this.state.checked});
    },

    render() {
        console.log(this.state.checked);
        return (
            <li> 
                <label className={
                    cx({'checkbox-label': true, 
                        'checkbox-label-done': this.state.checked})}>
                    <input 
                        className='checkbox-animated' 
                        type='checkbox' 
                        onChange={this.handleChange}
                    />
                    {this.props.name}
                </label>
            </li>
        );
    }
});


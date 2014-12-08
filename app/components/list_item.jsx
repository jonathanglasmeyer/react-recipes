require('styles/list_item.less');
require('styles/checkbox.less');

var deleteSymbol = require('img/delete.svg');
var cx = require('react/addons').addons.classSet;
var Actions = require('actions');


module.exports = React.createClass({

    handleChange(e) {
        Actions.check(this.props.data.key, !this.props.data.checked);
    },

    handleDelete(e) {
        $('#li-input').css({transition: 'all .2s ease-out'});
        e.preventDefault();
        Actions.delete(this.props.data.key);
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
                    {this.props.data.checked ?
                        <div className="delete-icon right"
                            dangerouslySetInnerHTML={{__html: deleteSymbol}} 
                            onClick={this.handleDelete}
                            />
                        :
                        null}
                </label>
            </li>
        );
    }
});


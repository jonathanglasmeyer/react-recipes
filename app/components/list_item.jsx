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
                    cx({'checkbox-label': true,
                        'checkbox-label-done': this.props.data.checked,
                        'checkbox-label-kraeuter': this.isCategory(0),
                        'checkbox-label-vegetable': this.isCategory(1),
                        'checkbox-label-milch': this.isCategory(2),
                        'checkbox-label-drogerie': this.isCategory(3)
                    })}>
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
                    : null}
                </label>
            </li>
        );
    }
});


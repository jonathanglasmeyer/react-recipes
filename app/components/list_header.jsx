'use strict';
require('styles/list_header');
require('styles/input');

let Actions = require('actions');

module.exports = React.createClass({

    render() {
        let {title, items, isRecipe} = this.props;

        let checkAllIcon =
            <div className='checkbox-wrap'
                onTouchStart={Actions.checkAll}>

                <input
                    className='checkbox-animated all'
                    type='checkbox'
                    checked={_.all(items, 'checked')}
                    readOnly
                    ref='checkbox'/>
            </div>;

        let titleElement =
            <span id='caption'>
                { title }
            </span>;

        return (
            <li id='list-header'>
                { items.length > 0 && !isRecipe ?
                    checkAllIcon : null }
                { titleElement}
            </li>
        );

    }
});



'use strict';

require('styles/item.less');
require('styles/checkbox.less');

let RecentItem = React.createClass({
    render() {

        return (
            <li
                style={ listTransformStyle(i+1)}
                key={i}>

                <div className='label-wrap'>
                    <label className='item'>
                        {checkbox(recent.checked)}
                        <span className='label-text'>
                            {recent.title}
                        </span>
                    </label>
                </div>
                {deleteIcon}
            </li>);
    }
});

module.exports = RecentItem;

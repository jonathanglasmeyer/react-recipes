'use strict';
require('styles/list.less');

var Input = require('components/input');
var ListItem = require('components/item');
var Buttons = require('components/buttons');

module.exports = React.createClass({
    render() {
        let sortedItems = _.sortBy(this.props.items, item => item.category.id);

        let itemComponents = [];

        let maxCat = -1;

        _.forEach(sortedItems, item => {
            if (item.category.id > maxCat) {
                itemComponents.push(<ListItem
                                     categoryStart={true}
                                     key={item.key}
                                     data={item} /> );
                maxCat = item.category.id;
            } else {
                itemComponents.push(<ListItem key={item.key} data={item} /> );
            }
        });

        return (
            <div className='list items'>
                <ul>
                    {itemComponents}
                    <li id='li-input'><Input /></li>
                </ul>
            </div>
        );
    }
});

                    // <li id='li-symbols'><Buttons /></li>

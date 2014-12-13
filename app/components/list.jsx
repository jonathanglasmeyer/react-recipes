'use strict';
require('styles/list.less');
require('styles/buttons.less');

var Input = require('components/input');
var ListItem = require('components/item');
var Buttons = require('components/buttons');

module.exports = React.createClass({
    checkedItemsExist() {
        return _.any(this.props.items, 'checked');
    },

    allItemsDone() {
        return _.all(this.props.items, 'checked');
    },


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
                    {this.props.items.length > 0 ?
                        <li id='buttons'><Buttons
                            showRemoveChecked={this.checkedItemsExist()}
                            allDone={this.allItemsDone()} /></li>
                    : null}

                    {itemComponents}

                    <li id='li-input'><Input /></li>
                </ul>
            </div>
        );
    }
});

                    // <li id='li-symbols'><Buttons /></li>

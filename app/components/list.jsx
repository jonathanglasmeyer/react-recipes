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

    heightListItems() {
        return this.props.items.length * 50 + 120;
    },

    heightList() {
        let height = this.heightListItems();
        let windowHeight = 470;
        return height < windowHeight ? windowHeight : height;
    },


    render() {
        let sortedItems = _.sortBy(this.props.items, item => item.category.id);

        let itemComponents = [];

        let maxCat = -1;

        _.forEach(sortedItems, item => {
            if (item.category.id > maxCat && maxCat > -1) {
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
            <div className='list items' style={{height: this.heightList()+'px'}}>
                <ul>
                        <li id='buttons'><Buttons
                            showRemoveChecked={this.checkedItemsExist()}
                            allDone={this.allItemsDone()}
                            listItemsExist={this.props.items.length > 0} /></li>

                    {itemComponents}

                    <li id='li-input'><Input listHeight={this.heightListItems()}/></li>
                </ul>
            </div>
        );
    }
});

                    // <li id='li-symbols'><Buttons /></li>

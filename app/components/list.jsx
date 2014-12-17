'use strict';
require('styles/list.less');
require('styles/buttons.less');
require('styles/footer.less');

var Input = require('components/input');
var Item = require('components/item');
var Buttons = require('components/buttons');
var Svg = require('components/svg');

module.exports = React.createClass({
    propTypes: {
        title: React.PropTypes.string,
        items: React.PropTypes.array,
        isRecipe: React.PropTypes.bool
    },

    getDefaultProps() {
        return {
            title: 'Einkaufsliste'
        };
    },

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
        return this.props.isRecipe ?
            height - 65:
            height < windowHeight ? windowHeight : height;
    },


    render() {
        let sortedItems = _.sortBy(this.props.items, item => item.category.id);

        let itemComponents = [];

        let maxCat = -1;

        _.forEach(sortedItems, item => {
            if (item.category.id > maxCat && maxCat > -1) {
                itemComponents.push(<Item
                                     isRecipeItem={this.props.isRecipe}
                                     categoryStart={true}
                                     key={item.key}
                                     data={item} /> );
                maxCat = item.category.id;
            } else {
                itemComponents.push(<Item
                                        isRecipeItem={this.props.isRecipe}
                                        key={item.key}
                                        data={item} /> );
            }
        });


        let input =
            (<li id='li-input'><Input listHeight={this.heightListItems()}/></li>);

        return (
            <div className='list items' style={{height: this.heightList()}}>
                <ul>

                    <li id='buttons'><Buttons
                        title={this.props.title}
                        showRemoveChecked={this.checkedItemsExist()}
                        allDone={this.allItemsDone()}
                        listItemsExist={this.props.items.length > 0}
                        isRecipe={this.props.isRecipe}/></li>

                    {itemComponents}

                    {!this.props.isRecipe ? input : null }

                </ul>
            </div>
        );
    }
});

                    // <li id='li-symbols'><Buttons /></li>

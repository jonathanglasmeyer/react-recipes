'use strict';
require('styles/list.less');
require('styles/buttons.less');

var Input = require('components/input');
var Item = require('components/item');
var Buttons = require('components/buttons');
var Svg = require('components/svg');
var Footer = require('components/footer');
var Actions = require('actions');


var {listTransformStyle} = require('helpers');

module.exports = React.createClass({
    propTypes: {
        title: React.PropTypes.string,
        // items: React.PropTypes.array,
        isRecipe: React.PropTypes.bool,
        recipeKey: React.PropTypes.string
    },

    getDefaultProps() {
        return {
            title: 'Einkaufsliste',
            recipeKey: '',
            items: []
        };
    },

    checkedItemsExist() {
        return _.any(this.props.items, 'checked');
    },

    allItemsDone() {
        return _.all(this.props.items, 'checked');
    },

    heightListItems() {
        return this.props.items.length * 50 + 160;
    },

    // adding all recipes ingredients
    onAddAll() {
        $('html, body').animate({
            scrollTop: 0
        }, 250);
        _.each(this.props.items, item => Actions.addItem(item.text));
    },

    onDeleteRecipe() {
        Actions.deleteRecipe(this.props.recipeKey);
    },


    heightList() {
        let height = this.heightListItems();
        let windowHeight = 470;
        return this.props.isRecipe ?
            height :
            height < windowHeight ? windowHeight : height;
    },



    render() {
        // let items = typeof this.props.items === 'object' ? 
                // _.toArray(this.props.items) : this.props.items;
        // console.log('list.jsx', items);

        let sortedItems = _.sortBy(this.props.items, item => {
            try {
                return item.category.id;
            } catch (err) {
                console.log(err);
                return 999;
            }
        });
            // return 'category' in item ? item.category.id : 999;}) ;

        let itemComponents = [];

        let maxCat = -1;

        _.forEach(sortedItems, (item,i) => {
            if (item.category.id > maxCat && maxCat > -1) {
                itemComponents.push(<Item
                                     isRecipeItem={this.props.isRecipe}
                                     categoryStart={true}
                                     key={item.key}
                                     i={i+1}
                                     data={item} /> );
                maxCat = item.category.id;
            } else {
                itemComponents.push(<Item
                                        isRecipeItem={this.props.isRecipe}
                                        key={item.key}
                                        i={i+1}
                                        data={item} /> );
            }
        });


        let input =
            <li
                id='li-input'
                style={listTransformStyle(this.props.items.length+1)}>

                <Input
                    recipeKey={this.props.recipeKey}
                    listHeight={this.heightListItems()}/>
            </li>;

        return (
            <div className='list items' style={{height: this.heightList()}}>
                <ul>

                    <li id='buttons'><Buttons
                        title={this.props.title}
                        showDeleteButton={this.checkedItemsExist()}
                        allDone={this.allItemsDone()}
                        isRecipe={this.props.isRecipe}
                        onAddAll={this.onAddAll}
                        onDeleteRecipe={this.onDeleteRecipe}
                        listItemsExist={this.props.items.length > 0} />
                    </li>

                    {itemComponents}

                    {input}

                </ul>
                <Footer {...this.props}/>
            </div>
        );
    }
});

                    // <li id='li-symbols'><Buttons /></li>

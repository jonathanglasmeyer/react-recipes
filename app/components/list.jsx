'use strict';
require('styles/list.less');

let pt = require('react').PropTypes;

let Input = require('components/input');
let Item = require('components/item');
let ListHeader = require('components/list_header');
let Footer = require('components/footer');
let {listTransformStyle} = require('helpers');

let List = React.createClass({

    propTypes: {
        i: pt.number, // index for calculating height of li element
        title: pt.string,
        items: pt.array,
        isRecipe: pt.bool,
        recipeKey: pt.string
    },

    getDefaultProps: () => ({
        title: 'Einkaufsliste',
        recipeKey: '',
    }),

    heightListItems() {
        return this.props.items.length * 50 + 160;
    },

    heightList() {
        let height = this.heightListItems();
        let windowHeight = 470;
        return this.props.isRecipe ?
            height :
            height < windowHeight ? windowHeight : height;
    },

    render() {
        let {items, isRecipe, recipeKey} = this.props;

        let sortedItems = _.sortBy(items, item => item.category.id);

        let itemComponents = _.map(sortedItems, (item, i) =>
            <Item key={item.key} i={i+1} data={item} isRecipeItem={isRecipe} />
        );

        let input =
            <li
                id='li-input'
                style={listTransformStyle(items.length+1)}>

                <Input
                    recipeKey={recipeKey}
                    listHeight={this.heightListItems()}/>
            </li>;

        return (
            <div className='items' style={{height: this.heightList()}}>
                <ul>
                    <ListHeader {...this.props} />
                    {itemComponents}
                    {input}
                </ul>
                <Footer {...this.props}/>
            </div>
        );
    }
});

module.exports = List;
                    // <li id='li-symbols'><ListHeader /></li>

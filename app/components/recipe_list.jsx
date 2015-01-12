'use strict';
require('styles/list.less');

let pt = require('react').PropTypes;

let Input = require('components/input');
let Item = require('components/item');

let h = require('helpers');
let a = require('animate');

let ShoppingList = React.createClass({

    propTypes: {
        i: pt.number, // index for calculating height of li element
        items: pt.array
    },

    render() {
        let {items, meta, counter, isRecipe, recipeKey, activeRecipe,
             openRecipe, activeItem, activeTitle, activeConfirm} = this.props;

        let categorizedItems = _.each(items, item =>
                                         item.category = category(item.text));
        let sortedItems = _.sortBy(categorizedItems, item => item.category.id);

        let itemComponents = _.map(sortedItems, (item, i) =>
            <ShoppingListItem
                key={item.key}
                i={i+2}
                item={item} />
        );


        // let pic =
        //     <li className='picture' >
        //         <img src={require('img/bild.jpg')}/>
        //     </li>;

        let heightList = Math.max(470, this.props.items.length * 50 + 104);

        let backgroundColor = !openRecipe ?
            helpers.mergeColors(counterColor_(this.props.counter), [255, 250, 245]) : null;

        return <ListWrap
            title='Einkaufsliste'
            style={{background: backgroundColor}}
            height={heightList}>

            <Input/>
            {itemComponents}
        <ListWrap/>;
    }
});

module.exports = ShoppingList;

                // {this.showPic() ? pic : null}
                    // <li id='li-symbols'><ListHeader /></li>

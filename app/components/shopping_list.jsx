'use strict';
require('styles/list.less');

let pt = require('react').PropTypes;

let ShoppingListInput = require('components/shopping_list_input');
let ShoppingListItem = require('components/shopping_list_item');
let ListWrap = require('components/list_wrap');

let ShoppingList = React.createClass({

    propTypes: {
        i: pt.number, // index for calculating height of li element
        items: pt.array
    },

    render() {
        // console.log(this.props.item);
        let categorizedItems = _.each(this.props.items, item =>
                                         item.category = h.category(item.text));
        let sortedItems = _.sortBy(categorizedItems, item => item.category.id);

        let itemComponents = _.map(sortedItems, (item, i) =>
            <ShoppingListItem key={item.key} i={i+2} item={item} />
        );

        // let pic =
        //     <li className='picture' >
        //         <img src={require('img/bild.jpg')}/>
        //     </li>;

        let heightList = Math.max(470, this.props.items.length * 50 + 104);

        return <ListWrap
            title='Einkaufsliste'
            height={heightList}>
            {itemComponents}


        </ListWrap>;

    }
});

module.exports = ShoppingList;

            // <ShoppingListInput/>

                // {this.showPic() ? pic : null}
                    // <li id='li-symbols'><ListHeader /></li>

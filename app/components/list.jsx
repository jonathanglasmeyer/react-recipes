'use strict';
require('styles/list.less');
// require('styles/item.less');

let pt = require('react').PropTypes;

let Input = require('components/input');
let Item = require('components/item');
let ListHeader = require('components/list_header');
let Footer = require('components/footer');
let {counterColor_, listTransformStyle, category} = require('helpers');
let helpers = require('helpers');
let {fadingSlow} = require('animate');
let animate = require('animate');

const IMAGE_HEIGHT=250;
const HEADER_HEIGHT=50;
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

    showInput() {
        return  this.props.activeItem ||
                !this.props.isRecipe ||
                this.props.items.length === 0;
    },

    showBody() {
        return this.props.openRecipe || !this.props.isRecipe;
    },

    showPic() {
        return false;
        // return !this.showBody();
    },

    heightListItems() {
        if (this.showPic()) {
            return IMAGE_HEIGHT+50;
        }
        if (this.props.isRecipe && !this.props.openRecipe) {
            return HEADER_HEIGHT;
        }
        return this.props.items.length * 50 + 104 +
            (this.showInput() ? 50 : 0);
    },

    heightList() {
        let height = this.heightListItems();
        let windowHeight = 470;
        return this.props.isRecipe ?
            height :
            height < windowHeight ? windowHeight : height;
    },



    render() {
        let {items, meta, counter, isRecipe, recipeKey, activeRecipe,
             openRecipe, activeItem, activeTitle, activeConfirm} = this.props;
        // console.log(meta);

        let categorizedItems = _.each(items, item =>
                                         item.category = category(item.text));
        let sortedItems = _.sortBy(categorizedItems, item => item.category.id);

        let itemComponents = _.map(sortedItems, (item, i) =>
            <Item
                key={item.key}
                i={this.showInput() ? i+2 : i+1}
                data={item}
                isRecipeItem={isRecipe}
                edit={activeItem===item.key}
                recipeKey={recipeKey}/>
        );

        let input =
            <li
                id='li-input'
                style={listTransformStyle(1)}>

                <Input
                    {...this.props}
                    listHeight={this.heightListItems()}/>
            </li>;

        let pic =
            <li className='picture' >
                <img src={require('img/bild.jpg')}/>
            </li>;

        return (
            <div
                className='items'
                style={{
                    height: this.heightList(),
                    background: helpers.mergeColors(counterColor_(this.props.counter), [255, 250, 245])
                }}>
                <ul>
                    <ListHeader {...this.props} />
                    {this.showPic() ? pic : null}
                    {this.showInput() ? input : null}
                    {animate.fadingSlow(this.showBody() ? itemComponents : null)}
                </ul>
                {this.showBody() ? <Footer {...this.props}/> : null}
            </div>
        );
    }
});

module.exports = List;
                    // <li id='li-symbols'><ListHeader /></li>

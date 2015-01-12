'use strict';
require('styles/list.less');
// require('styles/item.less');

let pt = require('react').PropTypes;

let Item = require('components/item');
let ListHeader = require('components/list_header');
let Footer = require('components/footer');
let helpers = require('helpers');
let {fadingSlow} = require('animate');
let animate = require('animate');
let Svg = require('components/svg');

let {listTransformStyle} = require('helpers');

let Recents = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    propTypes: {
        title: pt.string,
        recents: pt.array,
    },

    heightList() {
        return this.props.recents.length * 50 + 54;
    },

    handleDelete(e) {
        console.log('delete');
        // if (!this.props.isRecipeItem) {
        //     Actions.delete(this.props.data.key);

        // // for recipes
        // } else {
        //     Actions.deleteFromRecipe(this.props.recipeKey, this.props.data.key);
        // }

    },

    handleCheck(checked) {
        console.log('check');
    },

    render() {
        let {recents} = this.props;

        let deleteIcon =
                    <Svg handleClick={this.handleDelete}
                         fname='delete'
                         className='right delete-icon recent' />;

        let checkbox = checked_ =>
            <div className='checkbox-wrap'>
                <input
                    className='checkbox-animated'
                    readOnly
                    checked={checked_}
                    onChange={()=>this.handleCheck(checked_)}
                    type='checkbox'
                    />
            </div>;

        let itemComponents = _.map(recents, (recent, i) =>


            // <Item
            //     key={i+1}
            //     i={i+1}
            //     data={item}
            //     isRecipeItem={isRecipe}/>
        // );


        return (
            <div
                className='items'
                style={{
                    height: this.heightList(),
                }}>
                <ul>
                    <ListHeader simple={true} title='Letzte Rezepte' />
                    {animate.fadingSlow(itemComponents)}
                </ul>
            </div>
        );
    }
});

module.exports = Recents;
                    // <li id='li-symbols'><ListHeader /></li>

'use strict';

require('styles/input');

let Svg = require('components/svg');
let ItemWrap = require('components/item_wrap');

let LinkedStateMixin = require('react/addons').addons.LinkedStateMixin;

let ItemInput = React.createClass({
    mixins: [LinkedStateMixin],

    // componentDidMount() {
    //     // keyboard focus on input on shopping list
    //     if (!this.props.isRecipe) {
    //         $(this.refs.input.getDOMNode()).focus();
    //     }
    // },

    // componentDidUpdate() {
    //     if (!this.props.activeItem && !this.props.activeTitle && this.props.isRecipe) {
    //         $(this.refs.input.getDOMNode()).focus();
    //     }
    // },
    getInitialState: () => ({
        inputText: ''
    }),


    handleSubmit(e) {
        e.preventDefault();

        if (!this.state.inputText) {
            return;
        } else {
            this.setState({inputText:''});
            Actions.addItem(this.state.inputText);
        }
    },

    render() {
        return <ItemWrap id='li-input' i={1}>
            <form
                className='input-form'
                onSubmit={this.handleSubmit}>
                <Svg className='plus-icon' fname='add' />
                <input
                    type='text'
                    id='input-item'
                    placeholder='Artikel'
                    valueLink={this.linkState('inputText')}
                    ref='input' />
            </form>
        </ItemWrap>;
    }
});
module.exports = ItemInput;

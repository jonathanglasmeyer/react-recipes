'use strict';

require('styles/input');

let Svg = require('components/svg');

let Actions = require('actions');

let {scrollTo, viewportHeight, offset} = require('helpers');

module.exports = React.createClass({

    getDefaultProps() {
        return {
            isRecipe: false
        };
    },

    componentDidMount() {
        // keyboard focus on input on shopping list
        if (!this.props.isRecipe) {
            $(this.refs.input.getDOMNode()).focus();
        }
    },

    handleSubmit(e) {
        e.preventDefault();
        var element = this.refs.input.getDOMNode();
        var text = element.value.trim();
        if (!text) {
            return;
        } else {
            // we don't want an animation of the input box when we insert
            // looks ugly especially on mobile
            $('#li-input').css({transition: 'none'});

            // scroll to bottom of list
            let inputPosition = offset(element);
            console.log(inputPosition);
            console.log(inputPosition, viewportHeight());


            element.value = '';
            if (this.props.recipeKey !== '') {
                Actions.addToRecipe(text, this.props.recipeKey);
            } else {
            Actions.addItem(text);
            }
        }
    },

    render() {
        return (
                <form className='input-form' onSubmit={this.handleSubmit}>
                     <Svg className='plus-icon' fname='add' />
                     <input type='text' id='input-item' placeholder='Artikel' ref='input' />
                </form>
        );
    }
});

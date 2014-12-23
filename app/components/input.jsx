'use strict';

require('styles/input');

let Svg = require('components/svg');

let Actions = require('actions');

let {scrollTo} = require('helpers');

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

    scrollDown() {
        $('html body').scrollTop($(document).height());
        // var WH = $('html body').height();
        // var SH = $('body')[0].scrollHeight;
        // $('html, body').stop().animate({scrollTop: SH-WH}, 1000);
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
            let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            let inputPosition = $(element).offset().top;

            if (this.props.listHeight+100 > h) {
                scrollTo(inputPosition-180, 150);
            }

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

'use strict';

require('styles/input');

var Svg = require('components/svg');

var Actions = require('actions');

module.exports = React.createClass({

    getDefaultProps() {
        return {
            isRecipe: false
        }
    },


    componentDidMount() {
        // keyboard focus on input
        $(this.refs.input.getDOMNode()).focus();
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
            var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            // console.log(this.props.listHeight+100);
            // console.log(h);
            if (this.props.listHeight+100 > h) {
                $('html, body').animate({
                    scrollTop: this.props.listHeight-230
                }, 350);
            }

            element.value = '';
            Actions.addItem(text);
        }
    },

    render() {
        return (
                <form className='input-form' onSubmit={this.handleSubmit}>
                     <Svg className='plus-icon' fname='add' />
                     <input type='text' id='input-item' placeholder='Item' ref='input' />
                </form>
        );
    }
});

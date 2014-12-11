'use strict';

require('styles/input');

var Svg = require('components/svg');

var Actions = require('actions');

module.exports = React.createClass({

    componentDidMount() {
        // keyboard focus on input
        $(this.refs.input.getDOMNode()).focus();
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
            let listDiv = $('.items');
            listDiv.scrollTop(listDiv[0].scrollHeight);

            element.value = '';
            Actions.addItem(text);
        }
    },

    render() {
        return (
                <form className='input-form' onSubmit={this.handleSubmit}>
                     <Svg className='plus-icon' fname='add' />
                     <input type='text' placeholder='Item' ref='input' />
                </form>
        );
    }
});

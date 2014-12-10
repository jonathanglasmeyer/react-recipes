var $ = require('jquery');

require('styles/input');

var Svg = require('components/svg');

var Actions = require('actions');

module.exports = React.createClass({

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

            // only zoom y axis to input element if it is at the bottom border
            // of the viewport
            var pos = $(element).offset().top;
            var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            if (pos > height) {

                console.log(pos);
                console.log(height);
                $('.items').animate({
                    scrollTop: 0
                }, 3000);
            }
            element.value = '';
            Actions.add_item(text);
        }
    },

    render() {
        return (
                <form className='input-form' onSubmit={this.handleSubmit}>
                     <Svg className="plus-icon" fname='add' />
                     <input type="text" placeholder="Item" ref='input' />
                </form>
        );
    }
});

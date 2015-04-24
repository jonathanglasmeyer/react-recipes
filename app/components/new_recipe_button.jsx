'use strict';

require('styles/footer');
require('styles/new_recipe_button');

var cx = require('react/addons').addons.classSet;

var Button = require('./widgets/button.jsx');

let NewRecipeButton = React.createClass({

    getInitialState: () => ({
        active: false // render with background, touch events
    }),

    handleTouchStart() {
        this.setState({active: true});
    },

    handleTouchEnd() {
        this.setState({active: false});
    },

    handleNewRecipe() {
        Actions.newRecipe();
        setTimeout(() => {
            let buttonElement = this.refs.button.getDOMNode();
            if (h.offset(buttonElement) > h.viewportHeight()) {
              $('.main').scrollTop($('.main').scrollTop()+140);
            }
        }, 0);
    },

    render() {

        let className = cx({'new-recipe-button': true,
                           'active': this.state.active });

        return d('div.list.items', {
            ref: 'button',
            style: {height: 56},
            onTouchStart: this.handleTouchStart,
            onTouchEnd: this.handleTouchEnd,
            onClick: this.handleNewRecipe},

            d('div#footer', {className},
                d('div.footer-content', {}, d('div.text-center', {},
                    d(Button, {}, 'Neues Rezept')))));
    }
});

module.exports = NewRecipeButton;

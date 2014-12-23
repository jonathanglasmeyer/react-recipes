'use strict';

require('styles/footer');
require('styles/new_recipe_button');

var Actions = require('actions');
var Button = require('components/button');
let {scrollTo} = require('helpers');

let NewRecipeButton = React.createClass({
    handleNewRecipe() {
        Actions.newRecipe();
        let element = this.refs.button.getDOMNode();
        let buttonPosition = $(element).offset().top;
        scrollTo(buttonPosition+100, 550);
    },


    render() {
        return (
            <div className='list items'
                 ref='button'
                 style={{height: 56}}
                 onTouchStart={this.handleNewRecipe}>

                <div id='footer' className='new-recipe-button'>
                    <div className='footer-content'>
                        <div className='text-center'>
                            <Button text='Neues Rezept'/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
});

module.exports = NewRecipeButton;

'use strict';

require('styles/footer');
require('styles/new_recipe_button');

var Actions = require('actions');
var Button = require('components/button');

let NewRecipeButton = React.createClass({

    render() {
        return (
            <div className='list items'
                 style={{height: 56}}
                 onTouchEnd={Actions.newRecipe}>

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

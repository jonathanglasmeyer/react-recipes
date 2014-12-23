'use strict';

require('styles/footer');
require('styles/new_recipe_button');

let cx = require('react/addons').addons.classSet;

let Actions = require('actions');
let Button = require('components/button');
let {offset, scrollTo, viewportHeight} = require('helpers');

let NewRecipeButton = React.createClass({
    handleNewRecipe() {
        Actions.newRecipe();
        setTimeout(() => {
            let buttonElement = this.refs.button.getDOMNode();
            if (offset(buttonElement) > viewportHeight()) {
              $('.main').scrollTop($('.main').scrollTop()+140);
            }
        }, 0);
    },

    getInitialState: () => ({
        active: false // render with background, touch events
    }),

    handleTouchStart() {
        this.setState({active: true});
    },

    handleTouchEnd() {
        this.setState({active: false});
    },

    render() {

        let className = cx({'new-recipe-button': true,
                           'active': this.state.active });

        return (
            <div className='list items'
                 ref='button'
                 style={{height: 56}}
                 onTouchStart={this.handleTouchStart}
                 onTouchEnd={this.handleTouchEnd}
                 onClick={this.handleNewRecipe}>

                <div id='footer' className={className}>
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

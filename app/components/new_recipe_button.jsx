'use strict';

require('styles/footer.less');
var Actions = require('actions');
var Button = require('components/button');

module.exports = React.createClass({
    onAddRecipe() {
        Actions.newRecipe();
    },

    render() {
        return (
            <div className='list items'
                 style={{height: 56}}
                 onTouchStart={this.onAddRecipe}>

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

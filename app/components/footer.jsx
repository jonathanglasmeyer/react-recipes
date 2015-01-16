'use strict';

require('styles/footer.less');
var Actions = require('actions');
var Button = require('components/button');
var ConfirmButton = require('components/confirm_button');
// var cx = require('react/addons').addons.classSet;

let Footer = React.createClass({

    handleEndEditMode() {
        Actions.setActiveItem(null, null);
    },

    handleStartEditMode() {
        Actions.setActiveItem(this.props.recipeKey, null);
    },

    render() {
        let {items, isRecipe, recipeKey, activeRecipe,
            activeItem, activeConfirm} = this.props;
        // let {isRecipe, recipeKey} = this.props;

        let buttonLeft = isRecipe ?
            <ConfirmButton
                text='löschen'
                recipeKey={recipeKey}
                activeConfirm={activeConfirm}
                handleClick={() => Actions.deleteRecipe(recipeKey)} /> :
            <Button text={'aufräumen'} handleClick={Actions.removeAllChecked} />;

        let buttonRight = isRecipe ?
            <div className='button-right'>
                { activeRecipe ?
                    <Button text='fertig' color='green' handleClick={this.handleEndEditMode}/> :
                    <Button text='bearbeiten' handleClick={this.handleStartEditMode}/>
                }
            </div>
            : null;

        return (
            <div id='footer'>
               <div className='footer-content'>
                    {buttonLeft}
                    {buttonRight}
               </div>
            </div>
        );
    }

});

module.exports = Footer;


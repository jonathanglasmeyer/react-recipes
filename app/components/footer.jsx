'use strict';

require('styles/footer.less');
var Actions = require('actions');
var Button = require('components/button');
var ConfirmButton = require('components/confirm_button');
// var cx = require('react/addons').addons.classSet;

let Footer = React.createClass({


    render() {
        let {isRecipe, recipeKey} = this.props;

        let buttonLeft = isRecipe ?
            <ConfirmButton text='löschen'
                handleClick={() => Actions.deleteRecipe(recipeKey)} /> :
            <Button text={'aufräumen'} handleClick={Actions.removeAllChecked} />;

        return (
            <div id='footer'>
               <div className='footer-content'>
                    {buttonLeft}
               </div>
            </div>
        );
    }

});

module.exports = Footer;
                    // <div className='button-right'>
                    //     <Button text='save' onClick={Actions.deleteRecipe}/>
                    // </div>

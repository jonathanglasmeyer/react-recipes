'use strict';

require('styles/footer.less');
var Actions = require('actions');
var Button = require('components/button');

module.exports = React.createClass({

    // propTypes: {
    //     onSave: React.PropTypes.func,
    //     onClear: React.PropTypes.func
    // },
    onClear() {
        Actions.removeAllChecked();
    },

    onSave() {
        console.log('onSave');
    },

    render() {
        return (
            <div id='footer'>
               <div className='footer-content'>
                    <Button text='clear completed' onClick={this.onClear}/>
               </div>
            </div>
        );
    }
});

                    // <div className='button-right'>
                    //     <Button text='save' onClick={this.onSave}/>
                    // </div>

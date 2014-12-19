'use strict';
require('styles/fab');
var Svg = require('components/svg');

module.exports = React.createClass({
    render() {
        return (
            <div className='fab red'>
                 <Svg className='plus-icon' fname='add' fit />
                <div dangerouslySetInnerHTML={{__html:
                    '<paper-ripple class="circle recenteringTouch" fit></paper-ripple>'}} />
            </div>

        );
    }
});

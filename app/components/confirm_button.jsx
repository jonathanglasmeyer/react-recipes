'use strict';

require('styles/button');

let Button = require('components/button');
let {slideinSmallLeft, slideinSmall} = require('animate');
let Actions = require('actions');

module.exports = React.createClass({

    // getInitialState: () => ({
    //     confirmMode: false
    // }),

    // toggleConfirmMode() {
    //     this.setState({confirmMode: !this.state.confirmMode}); },

    // componentWillUpdate() {
    //     if (this.state.confirmMode) {
    //         let confirmalElement = $(this.refs.confirmal.getDOMNode());
    //         // confirmalElement.hide(0, () => this.setState({confirmMode: false}));
    //         confirmalElement.hide(0, () => console.log('hide'));
    //     }
    // },

    render() {
        let {text, handleClick, recipeKey, activeConfirm} = this.props;
        // let confirmMode = this.state.confirmMode;

        let button = <Button noActive={true} key={3}
                          handleClick={()=>Actions.setActiveConfirm(recipeKey)}
                          text={text}/>;


        let confirmal =
            <div className='confirmal' ref='confirmal'>
                <Button 
                    key={1} 
                    noActive={true} 
                    handleClick={()=>Actions.setActiveConfirm(null)} 
                    text='abbrechen' />
                <Button key={2} noActive={true} handleClick={handleClick} text={'löschen'} color='red' />
            </div>;

        // dynamic choose the right animation function
        let animation = activeConfirm ? slideinSmall : slideinSmallLeft;

        return animation(activeConfirm ? confirmal : button);
    }
});

'use strict';

require('styles/button');

let Button = require('components/button');
let Fade = require('mixins/fade');

module.exports = React.createClass({
    mixins: [Fade],

    getInitialState: () => ({
        confirmMode: false
    }),

    toggleConfirmMode() {
        this.setState({confirmMode: !this.state.confirmMode}); },

    // componentWillUpdate() {
    //     if (this.state.confirmMode) {
    //         let confirmalElement = $(this.refs.confirmal.getDOMNode());
    //         // confirmalElement.hide(0, () => this.setState({confirmMode: false}));
    //         confirmalElement.hide(0, () => console.log('hide'));
    //     }
    // },

    render() {
        let {text, handleClick} = this.props;
        let confirmMode = this.state.confirmMode;

        let button = <Button noActive={true} key={3}
                          handleClick={this.toggleConfirmMode}
                          text={text}/>;


        let confirmal =
            <div className='confirmal' ref='confirmal'>
                <Button key={1} handleClick={this.toggleConfirmMode} text='abbrechen' />
                <Button key={2} handleClick={handleClick} text={'löschen'} color='red' />
            </div>;

        return this.fading(confirmMode ? confirmal : button);
    }
});

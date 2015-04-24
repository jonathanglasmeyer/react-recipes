'use strict';
require('styles/svg');

var Svg = require('../../widgets/svg.jsx');

var pt = require('react').PropTypes;

let AddAllIcon = React.createClass({
    displayName: 'AddAllIcon',

    contextTypes: {
        recipe: pt.object.isRequired,
    },

    getInitialState: () => ({
        addedAll: false, // for 1sec showing of add all button
    }),

    handleClick() {
        this.setState({addedAll: true});
        setTimeout(()=>this.setState({addedAll: false}), 1000);

        _.each(this.context.recipe.items, item => Actions.addItem(item.text));
        // Actions.pushRecentRecipe(this.props.recipeKey);
        // Actions.incrementCounter(this.props.recipeKey);
    },

    render() {
        let onClick = this.handleClick;
        return d('div.header-left-icon', {},
          d(Svg, {fname: this.state.addedAll ? 'done':'add', onClick}));
    }
});
module.exports = AddAllIcon;

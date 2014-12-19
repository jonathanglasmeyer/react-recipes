'use strict';
require('styles/svg.less');

module.exports = React.createClass({
    getDefaultProps() {
        return {
            onClick: () => {}
        };
    },

    render() {
        return (
            <div className={"svg " + this.props.className}
                dangerouslySetInnerHTML={
                    {__html: require('img/' + this.props.fname + '.svg')}}
                onTouchStart={this.props.onClick} />
        );
    }
});


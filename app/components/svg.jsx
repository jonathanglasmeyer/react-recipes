'use strict';
require('styles/svg.less');

module.exports = React.createClass({

    getDefaultProps() {
        return {
            onClick: () => {}
        };
    },

    render() {
        let {handleClick, fname, className} = this.props;

        return (
            <div className={"svg " + className} style={{cursor: 'pointer'}}
                dangerouslySetInnerHTML={
                    {__html: require('img/' + fname + '.svg')}}
                onClick={this.props.onClick} />
        );
    }
});


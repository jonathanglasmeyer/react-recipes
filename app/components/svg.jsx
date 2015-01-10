'use strict';
require('styles/svg.less');

module.exports = React.createClass({

    getDefaultProps() {
        return {
            handleClick: () => {}
        };
    },

    render() {
        let {handleClick, fname, className} = this.props;

        return (
            <div className={"svg " + className}
                dangerouslySetInnerHTML={
                    {__html: require('img/' + fname + '.svg')}}
                onClick={handleClick} />
        );
    }
});


// var deleteSymbol = require('img/delete.svg');
require('styles/svg.less');
module.exports = React.createClass({
    render() {
        return (
            <div className={"svg " + this.props.className}
                dangerouslySetInnerHTML={
                    {__html: require('img/' + this.props.fname + '.svg')}}
                onClick={this.props.handleClick} />
        );
    }
});


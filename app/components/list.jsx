require('styles/list.less');

var  _ = require('lodash');

var React = require('react');
var ListItem = require('components/list_item');


module.exports = React.createClass({
    render() {
        let items = _.map(this.props.items,
                         (item, i) => <ListItem key={i} name={item} />);
        return (
            <div className='list'>
                <ul>{items}</ul>
            </div>
        );
    }
});

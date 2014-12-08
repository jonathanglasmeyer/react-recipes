require('styles/list.less');

var  _ = require('lodash');

var React = require('react');
var Input = require('components/input');
var ListItem = require('components/list_item');


module.exports = React.createClass({
    render() {
        let items = _.map(this.props.items,
                         (data, _) => <ListItem key={data.key} data={data} />);
        return (
            <div className='list items'>
                <ul>
                    {items}
                    <li id='li-input'><Input /></li>
                </ul>
            </div>
        );
    }
});

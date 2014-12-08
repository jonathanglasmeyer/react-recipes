require('styles/list.less');

var  _ = require('lodash');

var React = require('react');
var ListItem = require('components/list_item');


module.exports = React.createClass({
    render() {
        let items = _.map(this.props.items,
                         (data, _) => <ListItem 
                                        onSyncToggleState={this.props.onSyncToggleState} 
                                        key={data.key} data={data} />);
        return (
            <div className='list'>
                <ul>{items}</ul>
            </div>
        );
    }
});

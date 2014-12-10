require('styles/list.less');

var  _ = require('lodash');

var React = require('react');
var Input = require('components/input');
var ListItem = require('components/item');
var Category = require('components/category');


module.exports = React.createClass({
    render() {
        let sorted_items = _.sortBy(this.props.items, item => item.category.id);
        // let grouped_items = _.groupBy(this.props.items, 'category');
        // console.log(grouped_items);

        // let item_components = [];

        // let max_cat = -1;

        // _.forEach(sorted_items, item => {
        //     if (item.category > max_cat) {
        //         item_components.push(<Category name={item.category} />);
        //         max_cat = item.category;
        //     }
        //     item_components.push(<ListItem key={item.key} data={item} /> );
        // });

        let item_components = _.map(sorted_items,
                         (data, _) => <ListItem key={data.key} data={data} />);

        return (
            <div className='list items'>
                <ul>
                    {item_components}
                    <li id='li-input'><Input /></li>
                </ul>
            </div>
        );
    }
});

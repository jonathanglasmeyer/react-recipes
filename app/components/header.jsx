require('styles/header');

var React = require('react');


module.exports = React.createClass({
    render() {
        return (
            <header>
                <h2 className='text-center uppercase'>Shopping List</h2>
            </header>
        );
    }
});

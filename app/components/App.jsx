require('modernizr/modernizr');
require('base/less/style.less');

var React = require('react'),
    Hello = require('components/Hello');

module.exports = React.createClass({
    render() {
      return (
          <Hello />
      );
    }
});

var $ = require('jquery');
var React = require('react');

require('styles/input');

var Actions = require('actions');

var lebensmittel = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  limit: 5,
  prefetch: {
    url: './data/lebensmittel.json',
    filter: function(list) {
      return $.map(list, function(country) { return { name: country }; });
    }
  }
});
lebensmittel.initialize();

module.exports = React.createClass({

    _clearAndSend: function() {
        var element = this.refs.input.getDOMNode();
        var text = element.value.trim();
        element.value = '';
        $(element).typeahead('close');
        Actions.add_item(text);
    },

    componentDidMount() {
        var element = this.refs.input.getDOMNode();

        $(element).typeahead({
            autoselect: true,
            hint: true,
            highlight: true,
            minLength: 1
        },
        {
          name: 'lebensmittel',
          displayKey: 'name',
          source: lebensmittel.ttAdapter()
        }).focus();

        $(element).on('typeahead:selected', function(jquery, datum){
            console.log(datum.name);
		});
        $(element).on('typeahead:autocompleted', (jquery, datum) => {
            this._clearAndSend();
		});
	},



    componentWillUnmount() {
        var element = this.refs.input.getDOMNode();
		$(element).typeahead('destroy');
	},

    handleSubmit(e) {
        e.preventDefault();
        var element = this.refs.input.getDOMNode();
        var text = element.value.trim();
        if (!text) {
            return;
        } else {
            this._clearAndSend();
        }
    },

    render() {
        return (
                <form className='input-form' onSubmit={this.handleSubmit}>
                      <input className="typeahead" type="text" placeholder="Item"
                         ref='input' />
                      <input type="submit" className='hidden'/>
                </form>
        );
    }
});

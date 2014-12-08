var $ = require('jquery');
var React = require('react');


require('styles/input');

var plusSymbol = require('img/add.svg');

var Actions = require('actions');

// var lebensmittel = new Bloodhound({
//   datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
//   queryTokenizer: Bloodhound.tokenizers.whitespace,
//   limit: 5,
//   prefetch: {
//     url: './data/lebensmittel.json',
//     filter: function(list) {
//       return $.map(list, function(country) { return { name: country }; });
//     }
//   }
// });
// lebensmittel.initialize();



    //     $(element).typeahead({
    //         hint: true,
    //         highlight: true,
    //         minLength: 1
    //     },
    //     {
    //       name: 'lebensmittel',
    //       displayKey: 'name',
    //       source: lebensmittel.ttAdapter()
    //     }).focus();

    //     $(element).on('typeahead:selected', (jquery, datum) => {
    //         this._clearAndSend();
		// });
    //     $(element).on('typeahead:autocompleted', (jquery, datum) => {
    //         this._clearAndSend();
		// });
	// },

module.exports = React.createClass({
    // componentWillUnmount() {
    //     var element = this.refs.input.getDOMNode();
		// $(element).typeahead('destroy');
	// },
    componentDidMount() {
        element = this.refs.input.getDOMNode();
        $(element).focus();
    },

    handleSubmit(e) {
        e.preventDefault();
        var element = this.refs.input.getDOMNode();
        var text = element.value.trim();
        if (!text) {
            return;
        } else {
            $('html, body').animate({
                scrollTop: $(element).offset().top
            }, 0);
            element.value = '';
            Actions.add_item(text);
        }
    },

    render() {
        return (
                <form className='input-form' onSubmit={this.handleSubmit}>
                         <div className="plus-icon"
                            dangerouslySetInnerHTML={{__html: plusSymbol}} />
                      <input type="text" placeholder="Item"
                         ref='input' />
                </form>
        );
    }
});

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

    // componentDidMount() {
    //     element = this.refs.input.getDOMNode();
    //     $(element).focus();
    // },

    handleSubmit(e) {
        e.preventDefault();
        var element = this.refs.input.getDOMNode();
        var text = element.value.trim();
        if (!text) {
            return;
        } else {
            // we don't want an animation of the input box when we insert
            // looks ugly especially on mobile
            $('#li-input').css({transition: 'none'});

            // only zoom y axis to input element if it is at the bottom border
            // of the viewport
            var pos = $(element).offset().top;
            var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            if (pos > height) {

                console.log(pos);
                console.log(height);
                $('.items').animate({
                    scrollTop: 0
                }, 3000);
            }
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

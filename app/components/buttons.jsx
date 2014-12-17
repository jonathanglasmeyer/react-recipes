'use strict';
require('styles/buttons');
require('styles/input');


var cx = require('react/addons').addons.classSet;

let Actions = require('actions');
var Svg = require('components/svg');

module.exports = React.createClass({

    propTypes: {
        title: React.PropTypes.string,
        showDeleteButton: React.PropTypes.bool,
        allDone: React.PropTypes.bool,          // 'all done' button -> active?
        listItemsExist: React.PropTypes.bool,   // show 'all done' button at all?
        isRecipe: React.PropTypes.bool,
        onRecipeDelete: React.PropTypes.func
    },

    onRemoveChecked() {
        Actions.removeAllChecked();
    },

    onCheckAll() {
        Actions.checkAll();
    },

    getInitialState() {
        return {
            titleEdit: false,
            titleInputEmpty: true,
            titleText: ''
        };
    },

    toggleTitleEdit() {
        if (!this.props.allDone) {
            this.setState({titleEdit: !this.state.titleEdit});
        }
    },

    componentDidUpdate() {
        if (this.refs.input !== undefined) {
            let inputElement = this.refs.input.getDOMNode();
            $(inputElement).focus();
            var saveButton = this.refs.saveButton.getDOMNode();

            $(saveButton).on('click', this.handleSubmit);
            $(inputElement).on('focusout', () =>
                // hack so that the save button works.
                // if this doesn't happen, the onClick event can not fire,
                // because it isn't rendered anymore because of titleEdit = false
               setTimeout(() => this.setState({titleEdit: false}),12));
        }
    },


    handleSubmit(e) {
        e.preventDefault();
        // var element = this.refs.input.getDOMNode();
        // var text = element.value.trim();
        if (!this.state.titleText) {
            return;
        } else {
            this.setState({titleEdit: false});
            // scroll to bottom of list
            // var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            // if (this.props.listHeight+100 > h) {
            //     $('html, body').animate({
            //         scrollTop: this.props.listHeight-230
            //     }, 350);
            // }

            // element.value = '';

            Actions.saveAsRecipe(this.state.titleText);
            this.state.titleText = '';
        }
    },

    handleChange() {
        var element = this.refs.input.getDOMNode();
        var text = element.value.trim();
        this.setState({titleInputEmpty: text.length === 0, titleText: text});
    },

    renderRecipeHeader() {
        let title =
            <span
                id='caption'
                ref='title'
                style={{borderBottom: 0}}>

                {this.props.title}
            </span>;

        let buttons =
            <div>
                <Svg
                    className='header-left-icon add-icon'
                    fname='add'
                    onClick={this.props.onAddAll}/>

                <Svg
                   className='right header-right-icon delete-icon'
                   fname='delete'
                   onClick={this.props.onDeleteRecipe} />

            </div>;

        return <div> {title} {buttons} </div>;
    },

    renderTitleEdit() {
        let inputForm =
            <form
                className='input-form-title'
                onSubmit={this.handleSubmit}>

                <input
                    id='input-title'
                    type='text'
                    placeholder='Rezeptname'
                    ref='input'
                    onChange={this.handleChange}/>
            </form>;

        // the cancel and the save button
        let buttons =
            <div>
                <Svg
                    className={cx(
                       {'right save-icon header-right-icon': true,
                        'deactivated': this.state.titleInputEmpty })}
                    fname='save'
                    ref='saveButton'
                    onClick={this.handleSubmit} />

                <Svg
                    className='header-left-icon cancel-icon'
                    fname='cancel' />
            </div>;

        return <div> {inputForm} {buttons} </div>;
    },

    render() {
        if (this.state.titleEdit) { return this.renderTitleEdit(); }
        if (this.props.isRecipe) { return this.renderRecipeHeader(); }

        let checkAllIcon =
            <input
                className='checkbox-animated all'
                type='checkbox'
                checked={this.props.allDone}
                onChange={this.onCheckAll} />;

        let title =
            <span
                id='caption'
                ref='title'
                style={this.props.allDone ? {borderBottom: '0'} : null}
                onClick={this.toggleTitleEdit}>

                {this.props.title}
            </span>;

        let deleteIcon =
            <Svg
                onClick={this.onRemoveChecked}
                fname='delete'
                className={'right header-right-icon delete-icon delete-all-icon'}/>;

        return (
            <div>
                { this.props.listItemsExist ? checkAllIcon : null }

                { title }

                {this.props.showDeleteButton ? deleteIcon : null}

             </div>
        );

    }
});

            // <Svg onClick={this.onCheckAll} fname='doneall'
            //              className={cx({'doneall-icon': true,
            //                  'doneall-icon-all-done': this.props.allDone})} />
// Gemüse-Chili-Auflauf

// 27
// .rz
// .pie
// .veg
// 400 Kartoffeln 15min.
// (2) 40g saure Sahne, kräftig S/P
// (3) stampfen
// (4) gehackten Koriander unterziehen.

// Cuminsamen rösten, mörsern.
// Topf:
// (1) Korianderstiele, 3 gehackte Knoblauch und 2 gehackte grüne Chili, Cumin, 1cm Würfel: Zwiebeln und Sellerie. 15min.
// (2) 225g trocken Schwarze-Augen-Bohnen, 1 Dose gehackte Tomaten, S/P, kleine Flamme 20min.
// (3) 200g gegarte Paprika.

// Ofen 180°. Gemüse, Püree, oben: geräuchertes Paprikapulver, einritzen, 40g geriebener Cheddar. 30-40min.

// Mit Salat servieren.


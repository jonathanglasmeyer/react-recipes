'use strict';
require('styles/buttons');
require('styles/input');


var cx = require('react/addons').addons.classSet;

let Actions = require('actions');
var Svg = require('components/svg');

module.exports = React.createClass({

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
            titleEdited: ''
        };
    },

    toggleTitleEdit() {
        this.setState({titleEdit: !this.state.titleEdit});
    },

    componentDidUpdate() {
        if (this.refs.input !== undefined) {
            let inputElement = this.refs.input.getDOMNode();
            $(inputElement).focus();
            $(inputElement).on('focusout', () =>
               this.setState({titleEdit: false}));
            // handle keypresses
            // $(inputElement).keypress((e) => {
            //     var text = inputElement.value.trim();
            //     this.setState({titleInputEmpty: text.length === 0});
            //     console.log(e.key);
            // });
        }
    },

    handleSubmit(e) {
        e.preventDefault();
        var element = this.refs.input.getDOMNode();
        var text = element.value.trim();
        if (!text) {
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

            element.value = '';
            console.log('submit', text);
        }
            // Actions.addItem(text);
    },

    handleChange() {
        var element = this.refs.input.getDOMNode();
        var text = element.value.trim();
        this.setState({titleInputEmpty: text.length === 0});
    },


    render() {
        return (
            <div>
                { this.props.listItemsExist  && !this.state.titleEdit ?
                    <input
                        className='checkbox-animated all'
                        type='checkbox'
                        checked={this.props.allDone}
                        onChange={this.onCheckAll} />
                : null }

                { this.state.titleEdit ?
                    <form className='input-form-title' onSubmit={this.handleSubmit}>
                        <input
                            id='input-title'
                            type='text'
                            placeholder='Rezeptname'
                            ref='input'
                            onChange={this.handleChange}/>
                    </form>
                :
                    <span
                      id='caption'
                      className='placeholder'
                      ref='title'
                      onClick={this.toggleTitleEdit}
                      >{this.props.title}
                    </span>
                }


                {this.props.showRemoveChecked && !this.state.titleEdit ?
                    (<Svg onClick={this.onRemoveChecked} fname='delete'
                                 className='right delete-icon delete-all-icon' />)
                : null}

                {this.state.titleEdit ?
                <div>
                     <Svg
                        className={cx(
                            {'right save-icon': true,
                             'deactivated': this.state.titleInputEmpty })}
                        fname='save' />
                     <Svg className='cancel-icon' fname='cancel' />
                </div>
                : null}


             </div>
        );

    }
});

            // <Svg onClick={this.onCheckAll} fname='doneall'
            //              className={cx({'doneall-icon': true,
            //                  'doneall-icon-all-done': this.props.allDone})} />

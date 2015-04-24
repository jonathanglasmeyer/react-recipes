'use strict';
require('styles/list_header');
require('styles/input');
require('styles/svg');

let Actions = require('actions');
let Svg = require('components/svg');
let animate = require('animate');
let cx = require('react/addons').addons.classSet;
let {counterColor} = require('helpers');

let ListHeader = React.createClass({
    displayName: 'ListHeader',

    getInitialState: () => ({
        addedAll: false,
        active: false // render with background, touch events
    }),

    handleTouchStart() {
        this.setState({active: true});
    },

    handleTouchEnd() {
        this.setState({active: false});
    },

    componentDidUpdate() {
        if (this.props.activeTitle) {
            let element = this.refs.input.getDOMNode();
            $(element).focus();
        }
        if (this.props.activeMeta) {
            if (this.refs.inputMeta) {
                let element = this.refs.inputMeta.getDOMNode();
                $(element).focus();
            }
        }
    },

    // toggleTitleEdit() {
    //     if (this.props.isRecipe) {
    //         this.setState({titleEdit: !this.state.titleEdit});
    //     }
    // },

    handleAddAll() {
        // console.log(this.props.items);
        _.each(this.props.items, item => Actions.addItem(item.text));
        Actions.pushRecentRecipe(this.props.recipeKey);
        Actions.incrementCounter(this.props.recipeKey);
        this.setState({addedAll: true});
        setTimeout(()=>this.setState({addedAll: false}), 1000);
    },

    handleTitleClick() {
        if (this.props.openRecipe) {
            Actions.setOpenRecipe(null);
        } else {
            Actions.setOpenRecipe(this.props.recipeKey);
        }
    },

    handleMetaClick() {
        Actions.setActiveMeta(this.props.recipeKey);
    },

    handleTitleEdit() {
        Actions.setActiveTitle(this.props.recipeKey);
    },


    handleTitleEdited(e) {
        e.preventDefault();
        let element = this.refs.input.getDOMNode();
        let text = element.value.trim();
        if (!text) {
            Actions.setActiveItem(null, null);
        } else {
            Actions.renameRecipe(this.props.recipeKey, text);
            Actions.setActiveItem(null, null);
        }
    },

    handleMetaEdited(e) {
        e.preventDefault();
        let element = this.refs.inputMeta.getDOMNode();
        let text = element.value.trim();
        if (!text) {
            Actions.setActiveMeta(null);
        } else {
            Actions.setMeta(this.props.recipeKey, text);
            Actions.setActiveMeta(null);
        }
    },

    renderSimple() {
        let titleElement =
            <span
                id='caption'>
                { this.props.title }
            </span>;

        return (
            <li
                id='list-header'>
                {titleElement}
            </li>
        );

    },

    render() {
        if (this.props.simple) {
            return this.renderSimple();
        }

        let {title, meta, counter, items, isRecipe, recipeKey,
            activeTitle, activeRecipe, activeMeta, openRecipe} = this.props;

        let checkAllIcon =
            <div className='checkbox-wrap'
                onClick={Actions.checkAll}>

                <input
                    className='checkbox-animated all'
                    type='checkbox'
                    checked={_.all(items, 'checked')}
                    readOnly
                    ref='checkbox'/>
            </div>;

        let addAllIcon =
            animate.fading(
            <div className='header-left-icon'>
                <Svg
                    fname={this.state.addedAll ? 'done':'add'}
                    handleClick={this.handleAddAll}/>
            </div>);

        let editTitleIcon =
            animate.fading(
            <div className='header-right-icon'>
                <Svg
                    fname='edit'
                    handleClick={this.handleTitleEdit}/>
            </div>);

       let fontSize = (text) => 100 - Math.max(text.length-18, 0)*.5;
        // let fontSize = (text) => 100;

        let titleElement =
            <span
                id='caption'
                style={{fontSize:`${fontSize(title)}%`}}
                onClick={this.handleTitleClick}>
                { title }
            </span>;

        let titleEdit =
            <form className='input-form-title' onSubmit={this.handleTitleEdited}>
                 <input
                    type='text'
                    id='input-title'
                    defaultValue={title==='Unbenannt'? '':title}
                    placeholder={title}
                    ref='input' />
            </form>;

        let metaElement = !activeMeta ?
            <span
                className='meta'
                onClick={this.handleMetaClick}>
                {this.props.meta != '' ? '#':''}{this.props.meta}
            </span> :
            <form
                className='input-form-meta meta'
                onSubmit={this.handleMetaEdited}>

                <input
                   type='text'
                   id='input-meta'
                   ref='inputMeta' />
            </form>;


        let counterElement =
            <span
                className='counter'
                style={{color: counterColor(this.props.counter, .8)}}>
                {this.props.counter}
            </span>

        let className = cx({'active': this.state.active });
        return (
            <li
                id='list-header'
                className={className}
                onTouchStart={this.handleTouchStart}
                onTouchEnd={this.handleTouchEnd}>

                { isRecipe  ?
                    addAllIcon : items.length > 0 ? checkAllIcon : null }
                {activeTitle ? titleEdit: titleElement}
                {openRecipe ? metaElement : isRecipe? counterElement:null}
            </li>
        );
                // { titleElement}

    }
});

module.exports = ListHeader;

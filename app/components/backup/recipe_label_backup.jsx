'use strict';

var Checkbox = require('components/checkbox');

let CheckboxLabel = React.createClass({

    // propTypes: {

    },

    handleTouchStart() {
        this.touchCount=0;
        this.startTime=Date.now();
    },

    handleTouchMove() {
        this.touchCount++;
        console.log('touchmove');
    },

    handleTouchEnd() {
        if (this.touchCount === 0) {
            this.handleClick();
        }
    },

    handleClick() {
        this.handleChange();
        console.log(Date.now()-this.startTime);
    },

    handleChange() {
        // normal case: just check
        if (!this.props.isRecipeItem) {
            Actions.check(this.props.data.key, !this.props.data.checked);
        } else {
            // for recipes: enter edit mode
            Actions.setActiveItem(this.props.recipeKey, this.props.data.key);
        }
    },

    render() {
        let checkbox = !this.props.isRecipeItem ? <Checkbox/> : null;

        let itemEditForm =
            <form
                className='input-form-title input-form-item'
                onSubmit={this.handleItemEdited}>

                 <input
                    type='text'
                    id='input-title'
                    className='input-item'
                    defaultValue={this.props.data.text}
                    style={{border: 'none'}}
                    ref='input'/>
            </form>;

        return (
            <div className='label-wrap'
                onTouchStart={this.handleTouchStart}
                onTouchMove={this.handleTouchMove}
                onTouchEnd={this.handleTouchEnd}>
                <label
                    style={{cursor: isRecipeItem ? 'text' : 'pointer'}}
                    className={cx({'item': true,
                                   'item-done': this.checked(),
                                   'item-recipe': this.props.isRecipeItem})}>
                    <Checkbox/>
                    {!edit ?
                        <span className='label-text'>
                            {this.props.data.text}
                         </span> :
                        itemEditForm
                    }


                </label>
            </div>

        );
    }
});

module.exports = CheckboxLabel;

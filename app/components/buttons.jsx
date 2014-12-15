'use strict';
require('styles/buttons');

// var cx = require('react/addons').addons.classSet;

let Actions = require('actions');
var Svg = require('components/svg');

module.exports = React.createClass({

    onRemoveChecked() {
        Actions.removeAllChecked();
    },

    onCheckAll() {
        Actions.checkAll();
    },

    render() {
        return (
            <div>
                { this.props.listItemsExist ?
                    <input
                        className='checkbox-animated all'
                        type='checkbox'
                        checked={this.props.allDone}
                        onChange={this.onCheckAll} />
                : null }

            <span id='caption' >Einkaufsliste</span>


            {this.props.showRemoveChecked ?
                (<Svg onClick={this.onRemoveChecked} fname='delete'
                             className='right delete-icon delete-all-icon' />)
             : null}

             </div>
        );

    }
});

            // <Svg onClick={this.onCheckAll} fname='doneall'
            //              className={cx({'doneall-icon': true,
            //                  'doneall-icon-all-done': this.props.allDone})} />

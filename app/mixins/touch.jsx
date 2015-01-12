'use strict';

module.exports = {
    handleTouchStart() {
        this.touchCount=0;
        this.startTime=Date.now();
    },

    handleTouchMove() {
        this.touchCount++;
        console.log('touchmove');
    },

    handleTouchEnd() {
        console.log('handletouchend');
        if (this.touchCount === 0) {
            this.handleChange();
        }
    },

    handleClick() {
        if (!h.hasTouch()) {
            console.log('handleclick');
            this.handleChange();
        }
    },
}

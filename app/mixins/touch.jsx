'use strict';

module.exports = {
    handleTouchStart() {
        this.touchCount=0;
        this.startTime=Date.now();
    },

    handleTouchMove() {
        this.touchCount++;
    },

    handleTouchEnd() {
        if (this.touchCount === 0) {
            this.handleChange();
        }
    },

    handleClick() {
        if (!h.hasTouch()) {
            this.handleChange();
        }
    },
}

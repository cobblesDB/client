import React, { useState, useEffect } from 'react';
import Timer from './timer';

class TimerManager {
    constructor() {
        this.timers = new Map();
    }

    start(timerId) {
        console.log(`timerId : ${timerId}`);
        if (this.timers.get(timerId)) {
            return;
        }

        this.timers.set(timerId, {
            startTime: performance.now(),
            endTime: null,
        });
    }

    stop(timerId) {
        const timer = this.timers.get(timerId);
        if (!timer || timer.endTime !== null) {
            return;
        }

        timer.endTime = performance.now();
        const duration = timer.endTime - timer.startTime;
        this.reset(timerId);
        return duration.toFixed(2);
    }

    reset(timerId) {
        this.timers.delete(timerId);
    }
}

export default new TimerManager();
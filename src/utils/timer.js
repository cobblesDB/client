class Timer {
    constructor() {
        this.startTime = null;
        this.endTime = null;
    }

    start() {
        this.startTime = performance.now(); // 타이머 시작
    }

    stop() {
        if (this.startTime === null) {
            return;
        }
        this.endTime = performance.now(); // 타이머 종료
        const duration = this.endTime - this.startTime;
        this.reset();
        return duration;
    }

    reset() {
        this.startTime = null;
        this.endTime = null;
    }
}

export default new Timer(); 
// singleton-laze-logger

class LazeLogger {
    private static uniqueObject: LazeLogger;

    private LazeLogger() {}

    public static getLogger(): LazeLogger {
        if (this.uniqueObject == null) {
            this.uniqueObject = new LazeLogger();
        }
        return this.uniqueObject;
    }

    public info(message: string) {
        console.log(`[info] ${message}`);
    }

    public warnning(message: string) {
        console.log(`[warn] ${message}`);
    }

}

let lazeLogger: LazeLogger = LazeLogger.getLogger();
let lazeLogger2: LazeLogger = LazeLogger.getLogger();
lazeLogger.info('1번 : 정보 log');
lazeLogger.warnning('2번 : 경고 log');
lazeLogger.info(`3번 : ${lazeLogger === lazeLogger2}`);

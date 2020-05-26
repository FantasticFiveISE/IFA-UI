import { DEBUG } from './api/ApiFactory';

class Logger {
    log = (component, message) => {
        if (DEBUG) {
            console.log(component, message);
        }
    }
}

export default new Logger();
/**
 * Improved LogLevel to use in the Application instead of console
 */
import log from 'loglevel';

// Apply "level of logging" from the .env variable
log.setLevel(process.env.LOG_LEVEL || process.env.REACT_APP_LOG_LEVEL || log.levels.ERROR);
log.info('log.level:', Object.keys(log.levels)[log.getLevel()]);

// Internal cache for time() and timeEnd() calls
const _timers = {};

/**
 * Analog of console.time()
 * @param {string} id
 */
log.time = (id) => {
  const time = window.performance.now();
  const timerName = `${id}_start`;

  if (_timers[timerName]) {
    log.warn(`Timer "${id}" already exists. Call log.timeEnd("${id}") to reset the timer.`);
    return false;
  }

  _timers[timerName] = time; // Save Timer in the Cache
  return time;
};

/**
 * Analog of console.timeEnd()
 * @param {string} id
 */
log.timeEnd = (id) => {
  const timerName = `${id}_start`;
  const timerStart = _timers[timerName];
  if (!timerStart) {
    log.warn(`Timer "${id}" does not exist. Call log.time("${id}") first to create the timer.`);
    return -1;
  }
  const timeEnd = window.performance.now();
  const totalTime = timeEnd - timerStart;
  // Todo: Add average time counters if some option is set
  // const amount = (_timers[id + '_amount'] = _timers[id + '_amount'] ? _timers[id + '_amount'] + 1 : 1);
  // const sum = (_timers[id + '_sum'] = _timers[id + '_sum'] ? _timers[id + '_sum'] + time : time);
  // _timers[id + '_avg'] = sum / amount;

  delete _timers[timerName];
  log.info(`${id} - executionTime:`, totalTime);
  return totalTime;
};

export default log;

/**
 * Custome Error handler for Node CLI
 * @author: csalam07
 */

import cliSymbolsLog from 'cli-symbols-log';
import chalk from 'chalk';

const { red, yellow } = chalk;

/**
 * @param {String} heading
 * @param {Error} err
 * @param {Boolean} displayError
 * @param {Boolean} exit
 */

export default function (heading = `ERROR`, err, displayError, exit = true) {
  if (err) {
    console.log();
    if (displayError) {
      console.log(`${cliSymbolsLog.error} ${red(heading)}`);
      console.log(`${cliSymbolsLog.error} ${red(`ERROR →`)} ${err.name}`);
      console.log(`${cliSymbolsLog.info} ${red(`REASON →`)} ${err.message}`);
      console.log(
        `${cliSymbolsLog.info} ${red(`ERROR STACK ↓ \n`)} ${err.stack}\n`,
      );
    } else {
      console.log(`${cliSymbolsLog.warning}  ${yellow(heading)}\n`);
    }
    if (exit) {
      process.exit(0);
    } else {
      return false;
    }
  }
}

// const error = err.message || err;
// const errorType = err.name || 'Error';
// const errorStack = err.stack || '';

// console.log(`${cliSymbolsLog.error} ${heading}`);
// console.log(`${red(`${errorType}`)}: ${error}`);
// console.log(`${yellow(`Stack:`)} ${errorStack}`);

// if (displayError) {
//   console.error(err);
// }

// if (exit) {
//   process.exit(1);
// }

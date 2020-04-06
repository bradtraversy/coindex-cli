/**
 *  sub-commands for (check) command
 */

const porogram = require('commander');
const check = require('../commands/check.js');


porogram
    /**
     * register price command and its description 
     * this is a sub-command  for the -check command.
     */
    .command('price')
    .description('Check Price for Coins')

     /**
     * register the options for the price sub-command. 
     */
    .option('--coin <type>', 'Add specific coin types in CSV format', 'BTC,ETH,XRP')
    .option( '--cur <currency>', 'Change the Currency', 'USD' )

    /**
     * register the action for that command, simply a function. 
     * we pass the options as (cmd) arguments to the action function.
     */
       
    .action((cmd) => check.price(cmd))


/**
 * parse user input
 */
porogram.parse(process.argv);

// If no args, output help
if (!process.argv[2]) {
  program.outputHelp();
}

/**
 *  sub-commands for (key) command
 */

const porogram = require('commander');
const key = require('../commands/key.js');


porogram
    /**
     * register set command and its description 
     * this is a sub-command  for the -key command.
     */
    .command('set')
    .description('Set API Key -- Get at https://nomics.com/ ')

    /**
     * register the action for that command, simply a function. 
     */
        // decrepted: we can put action function as a callback to action
        // but it's better to put them all in a single file.
        //.action(()=>{ return console.log('set command !!') });
    .action(key.set)

porogram
    /**
     * register a command and its description 
     * this is a sub-command  for the -key command.
     */
    .command('show')
    .description('show API Key')

    /**
     * register the action for that command, simply a function. 
     */
    .action(key.show);

porogram
    /**
     * register set command and its description 
     * this is a sub-command  for the -key command.
     */
    .command('remove')
    .description('remove API Key ')

    /**
     * register the action for that command, simply a function. 
     */
    .action(key.remove);



/**
 * parse user input
 */
porogram.parse(process.argv);

// If no args, output help
if (!process.argv[2]) {
  program.outputHelp();
}

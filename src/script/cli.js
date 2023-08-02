const { Command } = require('commander');
const program = new Command();

const {copy} = require('./main')

program
  .name('copy')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0')
  .action(copy)

  program.parse()
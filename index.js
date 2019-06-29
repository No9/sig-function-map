const linuxPerf = require('linux-perf');
const process = require('process');

process.on('SIGUSR1', function () {
  console.log('starting');
  linuxPerf.start();
});

process.on('SIGUSR2', function () {
  linuxPerf.stop();
  console.log('finsi');
});

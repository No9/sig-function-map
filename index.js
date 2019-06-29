const linuxPerf = require('linux-perf');
const process = require('process');

process.on('SIGUSR1', function () {
  linuxPerf.start();
});

process.on('SIGUSR2', function () {
  linuxPerf.stop();
});

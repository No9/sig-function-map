require('../');
const fs = require('fs');
const process = require('process');
const path = require('path');
const spawnSync = require('child_process').spawnSync;
const test = require('tap').test;

test('check creation of map', function (t) {
  t.plan(1);
  spawnSync('kill', ['-s', 'SIGUSR1', process.pid]);
  spawnSync('kill', ['-s', 'SIGUSR2', process.pid]);
  setTimeout(function () {
    t.ok(fs.existsSync(path.join('/tmp', `perf-${process.pid}.map`)), 'File Created');
  }, 100);
});

# sig-function-map
A library to generate function maps using linux-perf and SIGUSR

Send SIGUSR1 to a process using this library to start generating a function map.
Send SIGUSR2 to stop updating the map.

The function map will be stored in `/tmp/perf-$PID.map`

### install

```
$ npm install sig-function-map -S
```

### usage

```
require('sig-function-map')
```

see kubectl-trace for a complete overview of using this library.


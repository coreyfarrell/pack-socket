# Demonstration of failed `npm pack` when socket file is hit

Tested on Linux, probably works on OSX and not Windows.  Clone the repository and run
`npm pack`:
```
$ npm pack

> pack-socket@0.1.0 prepack /usr/src/npm/failures/pack-socket
> node prepack.js

npm ERR! cb() never called!

npm ERR! This is an error with npm itself. Please report this error at:
npm ERR!     <https://npm.community>

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/cfarrell/.npm/_logs/2020-05-07T13_08_14_249Z-debug.log
```

Note `node prepack.js` creates `./listener.sock` and leaves it behind.  This causes the
unspecified error from `npm pack`.  No useful information is in the npm log.

Interesting note `git` ignores the socket file.  It does not appear in `git status --ignored`
and running `git add listener.sock` is silently ignored (the file is not staged, no error provided).

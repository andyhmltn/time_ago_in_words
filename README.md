time_ago_in_words
=================

A simple function that takes a timestamp and returns the time period between then and now in words (eg: '15 minutes ago')

Usage
--------------
Simply pass a timestamp into the `time_ago_in_words` function like so:

    time_ago_in_words(new Date() - (1000 * 60 * 60))

and it will return the time period. The example above will return '1 hour ago'

NodeJS
--------------
This script is compatible with NodeJS. To use it, you can install the package from NPM: `npm install time_ago_in_words` then use it like so:

    var time_ago_in_words = require('./time_ago_in_words');

    console.log(time_ago_in_words(new Date() - 1000 * 60));

Testing
--------------
This package uses `mocha` as a test framework. To use it, make sure you've run `npm install` and run the command: `npm test`

![NPM Badge](https://nodei.co/npm/time_ago_in_words.png?compact=true)
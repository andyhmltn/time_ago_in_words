time_ago_in_words
=================

A simple function that takes a timestamp and returns the time period between then and now in words (eg: '15 minutes ago')

Usage
--------------
Simply pass a timestamp into the `time_ago_in_words` function like so:

  time_ago_in_words(new Date() - (1000 * 60 * 60))

and it will return the time period. The example above will return '1 hour ago'
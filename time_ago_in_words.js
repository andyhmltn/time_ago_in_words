var time_ago_in_words;

/* time_ago_in_words method based on ActionView's helper of the same name
     see the following for more information
     http://api.rubyonrails.org/classes/ActionView/Helpers/DateHelper.html#method-i-time_ago_in_words
   
   It works by cycling through all the periods and providing the difference (`today` - `ts`) is more than
     that position in `lengths` it divides the difference by that same length until the conditions are no
     longer met when it then returns the full string.
     
   This method allows for easy expansion of the current periods ['second', 'minute' ... ] etc. Just add
     one to `periods` and add the length of the previous period (eg for decades, it would be 10 years)
     to `lengths`.

   The original PHP function that was converted over to JS can be found over @ css-tricks:
     http://css-tricks.com/snippets/php/time-ago-function/
*/

var time_ago_in_words = function (ts) {
  var from, to, difference, return_string, periods, lengths, tense, i;

  from = new Date(ts);
  to   = new Date();

  difference = Math.abs(to - from) / 1000;
  return_string = '';

  periods = ['seconds', 'minute', 'hour', 'day', 'week', 'month', 'year'];
  lengths = [60, 60, 24, 7, 4.35, 12];

  tense   = 'ago';

  if (difference < 60) {
    if (difference > 30) {
      return_string = '1 minute ago';
    } else {
      return_string = 'Less than one minute ago';
    }
    return return_string;
  }

  for (i = 0; difference >= lengths[i] && i < lengths.length; i++) {
    difference /= lengths[i];
  }

  difference = Math.round(difference);

  if (difference !== 1) {
    periods[i] += 's';
  }

  return_string = difference + ' ' + periods[i] + ' ' + tense;

  return return_string;
};

// Node.JS exports
if(typeof module != 'undefined') {
  module.exports = time_ago_in_words;
}

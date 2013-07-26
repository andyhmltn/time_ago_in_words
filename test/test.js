var assert = require('assert');
var time_ago_in_words = require('../time_ago_in_words');


describe("time_ago_in_words", function() {
  it("Rounds up to 'One minute ago' when the value is over 30 seconds but less than 1 minute.", function() {
    assert.equal(time_ago_in_words(new Date() - 1000 * 60), '1 minute ago');
  });

  it("Displays 'Less than one minute ago' when the value is less than 30 seconds", function() {
    assert.equal(time_ago_in_words(new Date() - 1000), 'Less than one minute ago');
  });

  it("Displays 'One minute ago' when the time is 1 and 1.5 minutes", function() {
    assert.equal(time_ago_in_words(new Date() - 1000 * 60), '1 minute ago');
    assert.equal(time_ago_in_words(new Date() - 1000 * 80), '1 minute ago');
  });

  it("Correctly pluralises any value over 1", function() {
    assert.notEqual(time_ago_in_words(new Date() - 1000 * 95).indexOf('minutes'), -1);
  });

  it("Displays Hours/Days/Weeks/Months correctly", function() {
    assert.notEqual(time_ago_in_words(new Date() - (1000 * 60 * 60)).indexOf('hour'), -1);
    assert.notEqual(time_ago_in_words(new Date() - (1000 * 60 * 60 * 24)).indexOf('day'), -1);
    assert.notEqual(time_ago_in_words(new Date() - (1000 * 60 * 60 * 24 * 7)).indexOf('week'), -1);
    assert.notEqual(time_ago_in_words(new Date() - (1000 * 60 * 60 * 24 * 7 * 4.5)).indexOf('month'), -1);
  });
});
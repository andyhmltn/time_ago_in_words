var assert = require('assert'),
    time_ago_in_words = require('../time_ago_in_words'),
    date = new Date()


describe("time_ago_in_words", function() {
  it("Rounds up to 'One minute ago' when the value is over 30 seconds but less than 1 minute.", function() {
    assert.equal(time_ago_in_words(date - 1000 * 60), '1 minute ago')
  })

  it("Displays 'Just now' when the value is less than 30 seconds", function() {
    assert.equal(time_ago_in_words(date - 1000), 'Just now')
  })

  it("Displays 'One minute ago' when the time is 1 and 1.5 minutes", function() {
    assert.equal(time_ago_in_words(date - 1000 * 60), '1 minute ago')
    assert.equal(time_ago_in_words(date - 1000 * 80), '1 minute ago')
  })

  it("Correctly pluralises any value over 1", function() {
    assert.notEqual(time_ago_in_words(date - 1000 * 95).indexOf('minutes '), -1)
  })

  it("Displays Hours/Days/Weeks/Months correctly", function() {
    var hour, day, week, month

    month = (week =  (day = (hour = 1000 * 60 * 60) * 24) * 7) * 4.5

    assert.notEqual(time_ago_in_words(date - hour).indexOf('hour'), -1)
    assert.notEqual(time_ago_in_words(date - day).indexOf('day'), -1)
    assert.notEqual(time_ago_in_words(date - week).indexOf('week'), -1)
    assert.notEqual(time_ago_in_words(date - month).indexOf('month'), -1)
  })

  it("Returns seconds if the second parameter is false", function() {
    assert.notEqual(time_ago_in_words(date - 1000 * 50, false).indexOf('seconds '), -1)
  })
})
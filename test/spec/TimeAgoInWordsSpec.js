describe("time_ago_in_words", function() {
  beforeEach(function() {});

  it("Rounds up to 'One minute ago' when the value is over 30 seconds but less than 1 minute.", function() {
    expect(time_ago_in_words(new Date() - 1000 * 60)).toEqual('1 minute ago');
  });

  it("Displays 'Less than one minute ago' when the value is less than 30 seconds", function() {
    expect(time_ago_in_words(new Date() - 1000)).toEqual('Less than one minute ago');
  });

  it("Displays 'One minute ago' when the time is 1 and 1.5 minutes", function() {
    expect(time_ago_in_words(new Date() - 1000 * 60)).toEqual('1 minute ago');
    expect(time_ago_in_words(new Date() - 1000 * 80)).toEqual('1 minute ago');
  });

  it("Correctly pluralises any value over 1", function() {
    expect(time_ago_in_words(new Date() - 1000 * 95)).toContain('minutes');
  });

  it("Displays Hours/Days/Weeks/Months correctly", function() {
    expect(time_ago_in_words(new Date() - (1000 * 60 * 60))).toContain('hour');
    expect(time_ago_in_words(new Date() - (1000 * 60 * 60 * 24))).toContain('day');
    expect(time_ago_in_words(new Date() - (1000 * 60 * 60 * 24 * 7))).toContain('week');
    expect(time_ago_in_words(new Date() - (1000 * 60 * 60 * 24 * 7 * 4.5))).toContain('month');
  });
});
const { format_date, format_plural, format_url } = require("../utils/helpers");

test("format_date() returns a date string", () => {
  const date = new Date("2022-03-14 16:12:03");

  expect(format_date(date)).toBe("3/14/2022");
});

test("format_plural() correctly pluralizes words", () => {
  const one = format_plural("Tiger", 2);
  const two = format_plural("Lion", 1);

  expect(one).toBe("Tigers");
  expect(two).toBe("Lion");
});

test("format_url() returns a simplified url string", () => {
  const url1 = format_url("http://test.com/page/1");
  const url2 = format_url("https://www.coolstuff.com/abcdefg/");
  const url3 = format_url("https://www.google.com?q=hello");

  expect(url1).toBe("test.com");
  expect(url2).toBe("coolstuff.com");
  expect(url3).toBe("google.com");
});

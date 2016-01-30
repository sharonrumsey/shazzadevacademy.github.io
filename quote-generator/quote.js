function quotable() {
  var quotes = [
    {quote: "\"I said\"", name: "Joe Blow"},
    {quote: "\"I said something\"", name: "Sharon Blow"}
  ];
  var random = quotes[Math.floor(Math.random() * quotes.length)];
  $(".quote").text(random.quote + " by Author: " + random.name);
}